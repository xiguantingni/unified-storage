/**
 * Created by RCC on 2018/6/15.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import context from '@src/context';
import reducers from '@src/reducers';
import Login from '@page/login/view';
import Main from '@page/main/view';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './common.less';

let store = createStore(reducers);
context.dispatch = store.dispatch;

ReactDom.render(
    <Provider store={store}>
        <LocaleProvider locale={zhCN}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Main} />
                </Switch>
            </BrowserRouter>
        </LocaleProvider>
    </Provider>,
    document.getElementById('app')
);
