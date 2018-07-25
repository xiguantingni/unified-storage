/**
 * Created by RCC on 2018/6/28.
 */

const namespace = 'main';
const initState = {
    breadcrumb: []
};

export default {
    namespace: namespace,
    reducer: (state = initState, { type, payload }) => {
        switch (type) {
            case 'common/updateBreadcrumb':
                if (payload.update) {
                    return {
                        breadcrumb: payload.update(state.breadcrumb)
                    }
                }
                return state;
            case `${namespace}/updateBreadcrumb`:
                if (payload.path) {
                    const tempArr = payload.path.split('/').filter(item => !!item);
                    if (JSON.stringify(state.breadcrumb) !== JSON.stringify(tempArr)) {
                        return {
                            breadcrumb: tempArr
                        }
                    }
                }
                return state;
            default:
                return state;
        }
    }
}
