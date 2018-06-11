/**
 * Created by RCC on 2018/6/7.
 */

import request from '@util/request'

export default {
    namespace: 'login',
    state: {
        loading: false
    },
    effects: {
        *loginRequest({ payload, successCallback }, { call, put }) {
            yield put({type: 'showLoginLoading'});
            const result = yield call(request.bind(this, 'http://localhost:8000/login/', {successCallback}));
            yield put({type: 'hideLoginLoading'});
            yield put({type: 'dealLoginRet', payload: result});
        }
    },
    reducers: {
        // 登录结果处理
        dealLoginRet: (state, { payload }) => {
            console.log('开始处理结果');
            console.log(payload);
            return state
        },
        // 显示登录loading
        'showLoginLoading': () => {
            return {
                loading: true
            }
        },
        // 隐藏登录loading
        'hideLoginLoading': () => {
            return {
                loading: false
            }
        }
    }
};
