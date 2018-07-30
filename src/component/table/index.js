/**
 * Created by RCC on 2018/7/13.
 * table组件
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Table as AntTable, Pagination, Dropdown, Menu, Icon } from 'antd';
import Loading from '@component/loading';
import NoData from '@component/nodata';
import './index.css';

// 组件默认值
const basePagination = {
    current: 1,
    pageSize: 20,
    pageSizeOptions: ['10', '20', '50'],
    showSizeChanger: true,
    total: 0,
    showTotal: (total, range) => {
        return `显示 ${range[0]} 至 ${range[1]} 项结果， 共 ${total} 项`;
    }
};

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.sorterRecord = {};
        this.state = {
            pagination: {
                current: 1,
                pageSize: 20
            },
            sort: {},
            filter: {}
        };
    }
    handleChange(pagination, filters, { order, field }) {
        this.setState({
            sort: {
                field: field,
                order: order
            }
        }, this.baseChange);
    }
    baseChange() {
        const { findChange } = this.props;
        const { pagination, sort, filter } = this.state;
        findChange && findChange(pagination, sort, filter)
    }
    handlePageChange(page, pageSize) {
        this.setState({
            pagination: {
                current: page,
                pageSize: pageSize
            }
        }, this.baseChange);
    }
    handleSizeChange(current, size) {
        this.setState({
            pagination: {
                current: current,
                pageSize: size
            }
        }, this.baseChange);
    }
    handleFilterChange(field, { key }) {
        this.setState({
            filter: {
                ...this.state.filter,
                [field]: key
            }
        }, this.baseChange)
    }
    getShowData() {
        const { dataSource, findMode } = this.props;
        const { pagination, sort, filter } = this.state;
        // 本地处理
        if (findMode === 'local') {
            let _data = [...dataSource]; // 浅复制
            // 过滤处理
            for(let key in filter) {
                _data = _data.filter(item => item[key] === filter[key])
            }
            // 排序处理
            const { field, order } = sort;
            if (order === 'ascend') { // 升序
                _data.sort(this.sorterRecord[field]);
                //_data.sort((a, b) => { console.log(++i); return a.name > b.name });
                //_data = _data.map((a) => a.name);
                //console.log(_data);
                //_data.sort();
                //console.log(_data);
            } else if (order === 'descend') { // 降序
                _data.sort().reverse();
            }
            // 分页处理
            const { current, pageSize } = pagination;
            _data = _data.splice((current - 1) * pageSize, current * pageSize - 1);
            return _data;
        }
        return dataSource;
    }
    getShowColumn() {
        const { findMode } = this.props;
        return this.props.columns.map(item => {
            // 处理过滤
            if (item.filter) {
                const { items } = item.filter;
                const _overlay = (
                    <Menu onClick={this.handleFilterChange.bind(this, item.dataIndex)}>
                        {
                            items.map(itm => <Menu.Item key={itm.value} disabled={itm.disabled}>{itm.text || itm.value}</Menu.Item>)
                        }
                    </Menu>
                );
                return {
                    ...item,
                    title: (
                        <Dropdown
                            style={{cursor: 'pointer'}}
                            overlay={_overlay}
                            placement={item.placement || 'bottomLeft'}
                            trigger={[item.trigger || 'click']}
                        >
                            <span>{item.title} <Icon type="down" /></span>
                        </Dropdown>
                    )
                }
            }
            // 处理排序
            if (item.sorter) {
                // 服务端排序
                const _item = { ...item };
                if (findMode === 'remote') {
                    _item.sorter = true;
                } else if (findMode === 'local') {
                    _item.sorter = true;
                    this.sorterRecord = {
                        ...this.sorterRecord,
                        [item.dataIndex]: typeof item.sorter === 'function' ? item.sorter : (a, b) => { return a[item.dataIndex] > b[item.dataIndex] }
                    }
                } else {
                    _item.sorter = false;
                }
                return _item;
            }
            return item;
        });
    }
    render() {
        const { dataSource, pagination, loading, columns } = this.props;
        console.log('this.props');

        const showData = this.getShowData();
        const showColumn = this.getShowColumn();
        return (
            <div className="table-container">
                <AntTable
                    { ...this.props }
                    columns={showColumn}
                    dataSource={ loading ? [] : showData }
                    loading={false}
                    pagination={false}
                    onChange={this.handleChange.bind(this)}
                />
                {
                    loading ? <Loading className="table-loading" /> : (
                        showData && showData.length === 0 ? <NoData className="table-nodata" /> : null
                    )
                }
                <Pagination
                    { ...{ ...basePagination, ...pagination, ...this.state.pagination } }
                    onChange={this.handlePageChange.bind(this)}
                    onShowSizeChange={this.handleSizeChange.bind(this)}
                />
            </div>
        )
    }
}

export default Table;
