/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { connect } from 'react-redux';
import { dispatch } from '@util/dispatch';
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
    getColumns() {
        const baseColumns = [
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            }
        ];
        return baseColumns;
    }
    render() {
        console.log(this.props);
        const { tableRows } = this.props;
        return (
            <div>
                <Row type="flex" justify="space-between">
                    <div>
                        <Button icon="reload" />
                    </div>
                    <Radio.Group value="overview" onChange={this.handleSizeChange}>
                        <Radio.Button value="overview">Large</Radio.Button>
                        <Radio.Button value="snapshot">Default</Radio.Button>
                        <Radio.Button value="performance">Small</Radio.Button>
                    </Radio.Group>
                </Row>
                <Divider />
                <Table dataSource={tableRows} columns={this.getColumns()} />
            </div>
        )
    }
}

export default connect(({ blockStorage }) => ({ ...blockStorage }))(BlockStorage);
