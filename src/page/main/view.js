/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import routes from '@src/route';
import './index.less';

class Main extends React.Component {
    constructor(props) {
        super(props);
        props.dispatch({
            type: 'main/updateBreadcrumb',
            payload: {
                path: props.location.pathname
            }
        })
    }
    componentWillReceiveProps(nextProps) {
        this.props.dispatch({
            type: 'main/updateBreadcrumb',
            payload: {
                path: nextProps.location.pathname
            }
        })
    }
    renderMenu() {
        const keys = this.props.location.pathname.split('/').filter(item => !!item);
        return (
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[keys[1] || keys[0]]}
                defaultOpenKeys={[keys[0]]}
                style={{ borderRight: 0 }}
            >
                {
                    // 菜单项仅为二级菜单，不考虑多级菜单场景
                    routes.children.map(item => {
                        // 第一级菜单
                        if (item.type === 'menuItem') {
                            return <Menu.Item key={item.key}><Link to={item.path}><Icon type="user" />{item.name}</Link></Menu.Item>
                        }
                        // 菜单
                        if (item.type === 'menu') {
                            return (
                                <SubMenu key={item.key} title={<span><Icon type={item.icon} />{item.name}</span>}>
                                    {
                                        (item.children || []).map(itm => {
                                            return (
                                                <Menu.Item key={itm.key}><Link to={itm.path}>{itm.name}</Link></Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
    renderBreadcrumb() {
        const ret = [];
        const arr = ['home', ...this.props.breadcrumb];
        const getBread = (routeArr, index) => {
            routeArr.forEach(item => {
                if (item.key === arr[index]) {
                    ret.push(item);
                    if (item.children && item.children.length > 0) {
                        getBread(item.children, index + 1);
                    }
                    return false;
                }
            })
        };
        getBread([routes], 0);
        return (
            <div>
                <div style={{float: 'left', lineHeight: '44px', fontSize: 20, marginLeft: 24}}>{ret[ret.length - 1].name}</div>
                <Breadcrumb style={{ margin: '12px 24px', float: 'right' }}>
                    {
                        ret.map((item, index) => {
                            if (index + 1 === ret.length) {
                                return (
                                    <Breadcrumb.Item key={item.key}>{item.name}</Breadcrumb.Item>
                                )
                            }
                            return (
                                <Breadcrumb.Item key={item.key}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Breadcrumb.Item>
                            )
                        })
                    }
                </Breadcrumb>
            </div>
        )
    }

    render() {
        const routeArr = [];
        const getValidRoute = (rt) => {
            rt.forEach(item => {
                // 添加路由
                if (item.type === 'menuItem' || item.type === 'subItem') {
                    routeArr.push(item);
                }
                if (item.children && item.children.length > 0) {
                    getValidRoute(item.children);
                }
            })
        };
        getValidRoute(routes.children);
        return (
            <Layout style={{height: '100%'}} className="main-page">
                <Layout>
                    <Sider width={200} style={{ overflow: 'auto', height: '100vh' }}>
                        <div className="header-logo">logo</div>
                        {this.renderMenu()}
                    </Sider>
                    <Layout style={{width: 'calc(100% - 200px)'}}>
                        <Header style={{background: '#fff', height: 48, lineHeight: '48px'}}>
                            <Button style={{marginRight: 8}} type="primary"><Link to="/monitorcenter">监控中心</Link></Button>
                            <Button type="primary"><Link to="/resourcemanage/topologymanage">拓扑管理</Link></Button>
                        </Header>
                        {this.renderBreadcrumb()}
                        <Content style={{ background: '#fff', padding: 12, margin: '0 24px'}}>
                            <Switch>
                                {
                                    routeArr.map(item => {
                                        return <Route key={item.key} path={item.path} exact component={item.component} />
                                    })
                                }
                                <Redirect to="/overview" />
                            </Switch>
                        </Content>
                        <Footer className="footer">
                            Copyright © 2008-2018 华云数据版权所有
                        </Footer>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default connect(state => state.main, null)(Main);
