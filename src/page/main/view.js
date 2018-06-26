/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import { connect } from 'react-redux';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import './index.less';

import Overview from '@page/overview/view';
import BlockStorage from '@page/blockstorage/view';
import AccessPath from '@page/accesspath/view';
import ClientGroup from '@page/clientgroup/view';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Layout style={{height: '100%'}} className="main-page">
                <Header style={{padding: 0}}>
                    <div className="header-logo">这是logo</div>
                    <div className="header-other">这是logo</div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="1"><Link to="/overview/">资源概览</Link></Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="user" />块存储</span>}>
                                <Menu.Item key="2"><Link to="/blockstorage/">块存储卷</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/accesspath/">访问路径</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/clientgroup/">客户端组</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 12, margin: 0}}>
                            <Switch>
                                <Route path="/overview/" exact component={Overview} />
                                <Route path="/blockstorage/" exact component={BlockStorage} />
                                <Route path="/accesspath/" exact component={AccessPath} />
                                <Route path="/clientgroup/" exact component={ClientGroup} />
                                <Route component={Overview} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
                <Footer className="footer">
                    统一存储平台 ©2018 华云数据版权所有
                </Footer>
            </Layout>
        )
    }
}

export default connect(null, null)(Main);
