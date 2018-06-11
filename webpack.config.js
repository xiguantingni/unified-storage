/**
 * Created by RCC on 2018/6/11.
 */

var fs = require("fs");

module.exports = (webpackConfig, env) => {

    // 将babel打包
    webpackConfig.entry = {
        index: ['babel-polyfill', '@/index']
    }

    // 别名配置
    webpackConfig.resolve.alias["@"] = `${__dirname}/src`;
    webpackConfig.resolve.alias["@page"] = "@/page";
    webpackConfig.resolve.alias["@model"] = "@/model";
    webpackConfig.resolve.alias["@util"] = "@/util";


    // 生成的webpack配置文件，请勿更改
    fs.writeFile('./webpack配置.json', JSON.stringify(webpackConfig) ,{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
        if(err){
            console.log("文件写入失败")
        }
    });

    return webpackConfig;
}
