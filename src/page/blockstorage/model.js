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
    sortField: '', // 此处是默认排序
    sortOrder: true,
    pagination: {
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
                    tableRows: []
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
            //case `${namespace}/pagination`:
            //    const { current, pageSize } = state.pagination;
            //    return {
            //        ...state,
            //        pagination: {
            //            ...state.pagination,
            //            current: payload.page || payload.current || current,
            //            pageSize: payload.size || payload.pageSize || pageSize
            //        }
            //    };
            //case `${namespace}/sorter`:
            //    return {
            //        ...state,
            //        sortField: payload.field,
            //        sortOrder: payload.order
            //    };
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
