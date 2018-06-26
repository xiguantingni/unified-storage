/**
 * Created by RCC on 2018/6/25.
 */

import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Overview from '@page/overview/view';
import BlockStorage from '@page/blockstorage/view';
import AccessPath from '@page/accesspath/view';
import ClientGroup from '@page/clientgroup/view';

class MainRoute extends React.Component {

    render() {
        return (
            <Switch>
                <Route path="/overview/" exact component={Overview} />
                <Route path="/blockstorage/" exact component={BlockStorage} />
                <Route path="/accesspath/" exact component={AccessPath} />
                <Route path="/clientgroup/" exact component={ClientGroup} />
                <Redirect to="/overview/" />
            </Switch>
        )
    }

}

export default MainRoute;
