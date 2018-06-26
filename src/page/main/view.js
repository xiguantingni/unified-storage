/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
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
                <Layout>
                    <Sider width={200} style={{ overflow: 'auto', height: '100vh' }}>
                        <div className="header-logo">logo</div>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ borderRight: 0 }}
                        >
                            <Menu.Item key="1"><Link to="/overview">资源概览</Link></Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="user" />块存储</span>}>
                                <Menu.Item key="2"><Link to="/blockstorage">块存储卷</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/accesspath">访问路径</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/clientgroup">客户端组</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />监控管理</span>}>
                                <Menu.Item key="5"><Link to="/blockstorage">监控中心</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/blockstorage">告警管理</Link></Menu.Item>
                                <Menu.Item key="7"><Link to="/blockstorage">监控报表</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />资源管理</span>}>
                                <Menu.Item key="8"><Link to="/blockstorage">存储池</Link></Menu.Item>
                                <Menu.Item key="9"><Link to="/blockstorage">拓扑管理</Link></Menu.Item>
                                <Menu.Item key="10"><Link to="/blockstorage">主机管理</Link></Menu.Item>
                                <Menu.Item key="11"><Link to="/blockstorage">硬盘管理</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="notification" />数据保护</span>}>
                                <Menu.Item key="12"><Link to="/blockstorage">数据迁移</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="notification" />系统管理</span>}>
                                <Menu.Item key="13"><Link to="/blockstorage">用户管理</Link></Menu.Item>
                                <Menu.Item key="14"><Link to="/blockstorage">操作日志</Link></Menu.Item>
                                <Menu.Item key="15"><Link to="/blockstorage">系统日志</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{width: 'calc(100% - 200px)'}}>
                        <Header style={{background: '#fff', height: 48, lineHeight: '48px'}}>
                            <div className="header-other">这是其他</div>
                        </Header>
                        <Breadcrumb style={{ margin: '12px 24px' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#fff', padding: 12, margin: '0 24px'}}>
                            <Switch>
                                <Route path="/overview" exact component={Overview} />
                                <Route path="/blockstorage" component={BlockStorage} />
                                <Route path="/accesspath" component={AccessPath} />
                                <Route path="/clientgroup" component={ClientGroup} />
                                <Redirect to="/overview" />
                            </Switch>
                        </Content>
                        <Footer className="footer">
                            统一存储平台 ©2018 华云数据版权所有
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default connect(null, null)(Main);
