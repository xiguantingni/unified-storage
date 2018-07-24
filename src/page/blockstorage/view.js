/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '@util/dispatch';
import propTypes from 'prop-types';
import { Row, Radio, Button, Divider, Table } from 'antd';

class BlockStorage extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        dispatch({
            type: 'blockStorage/volumeList',
            payload: {
                url: '/volume'
            }
        });
    }
    refreshClick() {
        dispatch({
            type: 'blockStorage/volumeList',
            payload: {
                url: '/volume'
            }
        });
    }
    getColumns() {
        const { tableShowType } = this.props;
        let columns = [];
        if (tableShowType === 'overview') {
            columns = [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                    sorter: (a, b) => ( a > b),
                    sortOrder: "ascend"
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
    getPagination() {
        const { pagination } = this.props;
        return {
            ...pagination,
            onChange: (page, pageSize) => {
                dispatch({
                    type: 'blockStorage/pagination',
                    payload: { page, pageSize }
                });
            },
            onShowSizeChange: (current, size) => {
                dispatch({
                    type: 'blockStorage/pagination',
                    payload: { current, size }
                });
            },
            showTotal: (total, range) => {
                const show = `显示 ${range[0]} 至 ${range[1]} 项结果， 共 ${total} 项`;
                return show;
            }
        }
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
    render() {
        const { tableRows, tableShowType, isFetchRows } = this.props;
        return (
            <div>
                <Row type="flex" justify="space-between">
                    <div>
                        <Button
                            type="primary"
                            icon="reload"
                            onClick={this.refreshClick.bind(this)}
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
                />
            </div>
        )
    }
}

export default connect(({ blockStorage }) => ({ ...blockStorage }))(BlockStorage);
