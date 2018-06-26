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
import './common.css';

let store = createStore(reducers);
context.dispatch = store.dispatch;

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Main} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
