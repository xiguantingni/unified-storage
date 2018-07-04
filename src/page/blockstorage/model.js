/**
 * Created by RCC on 2018/7/4.
 */

import constant from '@src/constant';

const namespace = 'blockStorage';
const initState = {
    tableShowType: 'overview',  // overview卷总览  snapshot卷快照  performance卷性能,
    tableRows: [],
    tableRowsError: null,
    isFetchRows: false
};

export default {
    namespace: namespace,
    reducer: (state = initState, { type, payload = {} }) => {
        switch (type) {
            case `${namespace}/volumeList_${constant.request}`:
                return {
                    ...state,
                    isFetchRows: true

                };
            case `${namespace}/volumeList_${constant.success}`:
                return {
                    ...state,
                    tableRows: payload.response.data.rows || [],
                    isFetchRows: false

                };
            case `${namespace}/volumeList_${constant.fail}`:
                return {
                    ...state,
                    tableRowsError: payload.err,
                    isFetchRows: false
                };
            default:
                return state
        }
    }
}
