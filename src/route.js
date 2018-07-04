/**
 * Created by RCC on 2018/6/25.
 */

import Page404 from '@page/page404/view';
import Overview from '@page/overview/view';
import BlockStorage from '@page/blockstorage/view';
import AccessPath from '@page/accesspath/view';
import ClientGroup from '@page/clientgroup/view';

// 该数组会自动生成菜单，面包屑和路由

export default {key: 'home', name: '首页', path: '/', type: 'home', children: [
    {key: 'overview', name: '资源概览', path: '/overview', type: 'menuItem', component: Overview, icon: 'user'},
    {key: 'blockstorage', name: '块存储', path: '/blockstorage/blockvolume', type: 'menu', icon: 'user', children: [
        {key: 'blockvolume', name: '块存储卷', path: '/blockstorage/blockvolume', type: 'subItem', component: BlockStorage},
        {key: 'accesspath', name: '访问路径', path: '/blockstorage/accesspath', type: 'subItem', component: AccessPath},
        {key: 'clientgroup', name: '客户端组', path: '/blockstorage/clientgroup', type: 'subItem', component: ClientGroup}
    ]},
    {key: 'monitormanage', name: '监控管理', path: '/monitormanage/monitorcenter', type: 'menu', icon: 'user', children: [
        {key: 'monitorcenter', name: '监控中心', path: '/monitormanage/monitorcenter', type: 'subItem', component: Page404},
        {key: 'alarmmanage', name: '告警管理', path: '/monitormanage/alarmmanage', type: 'subItem', component: Page404},
        {key: 'monitorreport', name: '监控报表', path: '/monitormanage/monitorreport', type: 'subItem', component: Page404}
    ]},
    {key: 'resourcemanage', name: '资源管理', path: '/resourcemanage/storagepool', type: 'menu', icon: 'user', children: [
        {key: 'storagepool', name: '存储池', path: '/resourcemanage/storagepool', type: 'subItem', component: Page404},
        {key: 'topologymanage', name: '拓扑管理', path: '/resourcemanage/topologymanage', type: 'subItem', component: Page404},
        {key: 'hostmanage', name: '主机管理', path: '/resourcemanage/hostmanage', type: 'subItem', component: Page404},
        {key: 'diskmanage', name: '硬盘管理', path: '/resourcemanage/diskmanage', type: 'subItem', component: Page404}
    ]},
    {key: 'dataprotect', name: '数据保护', path: '/dataprotect/datamigration', type: 'menu', icon: 'user', children: [
        {key: 'datamigration', name: '数据迁移', path: '/dataprotect/datamigration', type: 'subItem', component: Page404}
    ]},
    {key: 'systemmanage', name: '系统管理', path: '/systemmanage/usermanage', type: 'menu', icon: 'user', children: [
        {key: 'usermanage', name: '用户管理', path: '/systemmanage/usermanage', type: 'subItem', component: Page404},
        {key: 'operationlog', name: '操作日志', path: '/systemmanage/operationlog', type: 'subItem', component: Page404},
        {key: 'systemlog', name: '系统日志', path: '/systemmanage/systemlog', type: 'subItem', component: Page404}
    ]}
]}
