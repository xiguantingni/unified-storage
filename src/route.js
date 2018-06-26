/**
 * Created by RCC on 2018/6/25.
 */



export default [
    {key: 'resource', name: '资源', component: null, path: '', children: [
        {key: 'resourceOverview', name: '资源概览', component: null, path: '', children: []},
        {key: 'blockStorage', name: '块存储', component: null, path: '', children: [
            {key: 'blockStorage', name: '块存储卷', component: null, path: '', children: []},
            {key: 'accessPath', name: '访问路径', component: null, path: '', children: []},
            {key: 'clientGroup', name: '客户端组', component: null, path: '', children: []}
        ]},
        {key: 'monitorManage', name: '监控管理', component: null, path: '', children: [
            {key: 'monitorCenter', name: '监控中心', component: null, path: '', children: []},
            {key: 'warnManage', name: '告警管理', component: null, path: '', children: []},
            {key: 'monitorReport', name: '监控报表', component: null, path: '', children: []}
        ]},
        {key: 'resourceManage', name: '资源管理', component: null, path: '', children: [
            {key: 'storagePool', name: '存储池', component: null, path: '', children: []},
            {key: 'topologyManage', name: '拓扑管理', component: null, path: '', children: []},
            {key: 'hostManage', name: '主机管理', component: null, path: '', children: []},
            {key: 'diskManage', name: '硬盘管理', component: null, path: '', children: []}
        ]},
        {key: 'systemManage', name: '系统管理', component: null, path: '', children: [
            {key: 'userManage', name: '用户管理', component: null, path: '', children: []},
            {key: 'operateLog', name: '操作日志', component: null, path: '', children: []},
            {key: 'systemLog', name: '系统日志', component: null, path: '', children: []}
        ]}
    ]}
]
