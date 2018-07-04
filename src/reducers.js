/**
 * Created by RCC on 2018/6/21.
 * 搜集所有的reducer
 */

import login from '@page/login/model';
import main from '@page/main/model';
import blockStorage from '@page/blockstorage/model';
import { combineReducers } from 'redux';

export default combineReducers({
    [login.namespace]: login.reducer,
    [main.namespace]: main.reducer,
    [blockStorage.namespace]: blockStorage.reducer
});
