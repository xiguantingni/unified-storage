import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

// options释义
// post接口成功失败，界面都会提示，需提示语句
// options = {
//     successCallback: function, // 成功回调
//     failCallback: function, // 失败回调
//     successAlertMsg: '操作成功', // 成功提示语。默认：post请求提示，get不提示。
//     method: 'GET', // 方法
//     para: {type : 1}, //url参数
//     body: {name: 123} // post数据
// }

export default function request(url, options = {}) {
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
        'Content-Type': 'application/json'
    }
    // method处理
    if (!options.method) {
        options.method = 'GET';
    }

    return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
        // 成功获取后台数据
        console.log(data)
        if (data && data.code === 0) {
            if (options.successCallback) {
                options.successCallback(data)
            }
            // 非get请求默认提示
            if (options.method !== 'GET') {
                window.alert(options.successAlertMsg || '操作成功')
            }
        } else {
            // 给出错误提示
            console.log(data)
            if (options.failCallback) {
                options.failCallback(data)
            }
        }
        return data;
    })
    .catch(err => {
        // 连接错误，或者前端语法错误
        console.log(err);
        if (options.failCallback) {
            options.failCallback(err)
        }
    });
}
