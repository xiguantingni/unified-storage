// webpack 配置参考文档

// https://github.com/sorrycc/roadhog/blob/master/README_zh-cn.md

const path = require('path');

const webpackConfig = {
    "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
    ]
}

export default webpackConfig;
