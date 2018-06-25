/**
 * Created by RCC on 2018/6/20.
 */

import constant from '@src/constant';

const initState = {
    loading: false,
    data: {
        a: 1,
        b: 2
    }
};

const namespace = 'login';

export default {
    namespace: namespace,
    reducer: (state = initState, { type, response, error }) => {
        switch (type) {
            case `${namespace}/init`:
                return state;
            case `${namespace}/loginRequest_${constant.request}`:
                return {
                    ...state,
                    loading: true
                };
            case `${namespace}/loginRequest_${constant.success}`:
                return {
                    ...state,
                    loading: false
                };
            case `${namespace}/loginRequest_${constant.fail}`:
                return {
                    ...state,
                    loading: false
                };
            default:
                return state;
        }
    }
}
