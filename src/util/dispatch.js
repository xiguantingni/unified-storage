/**
 * Created by RCC on 2018/6/22.
 * 该方法触发action
 * 包含异步和同步action.
 * 注意：异步action，需在type后增加_success接收
 */

import context from '@src/context';
import { request } from '@util/request';

export const dispatch = ({type, payload = {}}) => {
    const { url } = payload;
    if (!url) {
        // 同步请求
        context.dispatch({type, payload});
    } else {
        // 异步请求
        request(url, {...payload, type});
    }
};
