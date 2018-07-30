/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '@util/dispatch';
import propTypes from 'prop-types';
import { Row, Radio, Button, Divider } from 'antd';
import Table from '@component/table';

class BlockStorage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSorter = this.handleSorter.bind(this);
        this.paras = {}
    }
    componentDidMount() {
        this.fetchVolumeList();
    }
    fetchVolumeList() {
        dispatch({
            type: 'blockStorage/volumeList',
            payload: {
                url: '/volume'
            }
        });
    }
    getColumns() {
        const { tableShowType, sortField, sortOrder } = this.props;
        let columns = [];
        if (tableShowType === 'overview') {
            columns = [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                    sorter: true // true, false(无), function(升序)
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status',
                    filter: {
                        items: [
                            {text: '健康', value: '健康', disabled: false},
                            {text: '不健康', value: '2', disabled: false}
                        ],
                        placement: 'bottomLeft',
                        trigger: 'click'
                    }
                },
                {
                    title: '存储池',
                    dataIndex: 'poolname',
                    key: 'poolname'

                },
                {
                    title: '访问路径',
                    dataIndex: 'accesspath',
                    key: 'accesspath'
                },
                {
                    title: '客户端组',
                    dataIndex: 'clientgroup',
                    key: 'clientgroup'
                }
            ]
        } else if (tableShowType === 'snapshot') {
            columns = [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status'
                },
                {
                    title: '存储池',
                    dataIndex: 'poolname',
                    key: 'poolname'
                },
                {
                    title: '访问路径',
                    dataIndex: 'accesspath',
                    key: 'accesspath'
                }
            ]
        } else if (tableShowType === 'performance') {
            columns = [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name'
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    key: 'status'
                },
                {
                    title: '存储池',
                    dataIndex: 'poolname',
                    key: 'poolname'
                },
                {
                    title: '访问路径',
                    dataIndex: 'accesspath',
                    key: 'accesspath'
                },
                {
                    title: '客户端组',
                    dataIndex: 'clientgroup',
                    key: 'clientgroup'
                }
            ]
        }

        return columns;
    }
    //getPagination() {
    //    const { pagination } = this.props;
    //    return {
    //        ...pagination,
    //        onChange: (page, pageSize) => {
    //            dispatch({
    //                type: 'blockStorage/pagination',
    //                payload: { page, pageSize }
    //            });
    //            this.fetchVolumeList();
    //        },
    //        onShowSizeChange: (current, size) => {
    //            dispatch({
    //                type: 'blockStorage/pagination',
    //                payload: { current, size }
    //            });
    //            this.fetchVolumeList();
    //        }
    //    }
    //}
    getPagination() {
        return { total: this.props.pagination.total }
    }
    getRowSelection() {
        return {
            onChange: () => {
                console.log('选择发生变化');
            }
        }
    }
    handleShowTypeChange(e) {
        dispatch({
            type: 'blockStorage/showTypeChange',
            payload: {
                value: e.target.value
            }
        })
    }
    // 服务端排序，直接请求即可；客户端排序，sort回调函数，默认字符串大小比对；
    handleSorter(field, order) {
        this.fetchVolumeList();
    }
    handleFindChange() {
        console.log(arguments);
        //this.fetchVolumeList();
    }
    render() {
        const { tableRows, tableShowType, isFetchRows } = this.props;
        return (
            <div>
                <Row type="flex" justify="space-between">
                    <div>
                        <Button
                            type="primary"
                            icon="reload"
                            onClick={this.fetchVolumeList.bind(this)}
                            disabled={isFetchRows}
                            style={{marginRight: 8}}
                        />
                        <Button
                            icon="plus"
                            style={{marginRight: 8}}
                            type="primary"
                        >
                            创建
                        </Button>
                        <Button
                            icon="minus"
                            type="danger"
                            disabled={isFetchRows}
                        >
                            删除
                        </Button>
                    </div>
                    <Radio.Group value={tableShowType} onChange={this.handleShowTypeChange.bind(this)}>
                        <Radio.Button value="overview">卷总览</Radio.Button>
                        <Radio.Button value="snapshot">卷快照</Radio.Button>
                        <Radio.Button value="performance">卷性能</Radio.Button>
                    </Radio.Group>
                </Row>
                <Divider />
                <Table
                    rowKey="id"
                    dataSource={tableRows}
                    columns={this.getColumns()}
                    pagination={this.getPagination()}
                    rowSelection={this.getRowSelection()}
                    loading={isFetchRows}
                    findMode="local"
                    findChange={this.handleFindChange.bind(this)}
                />
            </div>
        )
    }
}

export default connect(({ blockStorage }) => ({ ...blockStorage }))(BlockStorage);
