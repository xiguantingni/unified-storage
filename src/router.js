import React from 'react';
import { Router, Route } from 'dva/router';
import Login from '@page/login';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/login/" exact component={Login} />
    </Router>
  );
}

export default RouterConfig;
