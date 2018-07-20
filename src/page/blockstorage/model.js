/**
 * Created by RCC on 2018/7/4.
 */

import constant from '@src/constant';

const namespace = 'blockStorage';
const initState = {
    tableShowType: 'overview',  // overview卷总览  snapshot卷快照  performance卷性能,
    tableRows: [],
    tableRowsError: null,
    isFetchRows: false,
    pagination: {
        current: 1,
        pageSize: 10,
        pageSizeOptions: ['10', '20', '50'],
        showQuickJumper: true,
        showSizeChanger: true,
        total: 0
    }
};

export default {
    namespace: namespace,
    reducer: (state = initState, { type, payload = {} }) => {
        switch (type) {
            case `${namespace}/volumeList_${constant.request}`:
                return {
                    ...state,
                    isFetchRows: true,
                    tableRows: [],
                    pagination: {
                        total: 0
                    }
                };
            case `${namespace}/volumeList_${constant.success}`:
                return {
                    ...state,
                    tableRows: payload.response.data.rows || [],
                    isFetchRows: false,
                    pagination: {
                        ...state.pagination,
                        total: payload.response.data.total
                    }

                };
            case `${namespace}/volumeList_${constant.fail}`:
                return {
                    ...state,
                    tableRowsError: payload.err,
                    isFetchRows: false
                };
            case `${namespace}/pagination`:
                const { current, pageSize } = state.pagination;
                return {
                    ...state,
                    pagination: {
                        ...state.pagination,
                        current: payload.page || current,
                        pageSize: payload.size || pageSize
                    }
                };
            case `${namespace}/showTypeChange`:
                return {
                    ...state,
                    tableShowType: payload.value
                };
            default:
                return state
        }
    }
}
