/**
 * Created by RCC on 2018/6/22.
 *  options释义
        post接口成功失败，界面都会提示，需提示语句
        options = {
            successCallback: function, // 成功回调
            failCallback: function, // 失败回调
            successAlertMsg: '操作成功', // 成功提示语。默认：post请求提示，get不提示。
            method: 'GET', // 方法
            para: {type : 1}, //url参数
            body: {name: 123} // post数据
        }
 */

import fetch from 'isomorphic-fetch';
import context from '@src/context';
import constant from '@src/constant';

export const request = (url, options = {}) => {
    // 1,url处理
    if (options.para) {
        let _suffix = '';
        for (let key in options.para) {
            if (url.indexOf(key) >= 0) {
                url.replace(`{${key}}`, options.para[key]);
            } else {
                _suffix += `&${key}=${options.para[key]}`;
            }
        }
        url += _suffix ? '?' + _suffix.substring(1) : '';
    }
    // headers处理
    options.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };
    options.credentials = 'include';
    // method处理
    if (!options.method) {
        options.method = 'GET';
    }
    // body 处理
    if (options.body) {
        options.body = JSON.stringify(options.body);
    }
    // 通知request
    context.dispatch({type: `${options.type}_${constant.request}`, payload: options});

    return fetch(`/api${url}`, options).then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res;
            }

            const error = new Error(res.statusText);
            error.response = res;
            throw error;
        })
        .then((res) => {
            return res.json();
        })
        .then(res => {
            // 成功获取后台数据
            console.log(res);
            if (res && res.code === '0') {
                // 执行回调
                if (options.successCallback) {
                    options.successCallback(res);
                }
                // 非get请求默认提示
                // 暂略

                // 成功通知
                context.dispatch({type: `${options.type}_${constant.success}`, payload: {...options, response: res}});
            } else {
                // 给出错误提示
                console.log(res);
                if (options.failCallback) {
                    options.failCallback(res);
                }
                // 失败通知
                context.dispatch({type: `${options.type}_${constant.fail}`, payload: {...options, response: res}});
            }
            return res;
        })
        .catch(error => {
            // 网络连接错误，或者前端语法错误
            console.log(error);
            if (options.failCallback) {
                options.failCallback(error);
            }
            // 失败通知
            context.dispatch({type: `${options.type}_${constant.fail}`, payload: {...options, error}});
        });
};
