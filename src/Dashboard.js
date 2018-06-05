import React, { Component } from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import First from './first'
import Second from './Second'
class Dashboard extends Component {
    render() {
        return(
            <div>
                <Link to='/dashboard/'>123</Link>
                <Link to='/dashboard/first'>234</Link>
                <Link to='/dashboard/second'>456</Link>
                <BrowserRouter>
                    <Switch>
                        <Route exact o='/dashboard/' component={Dashboard}></Route>
                        <Route exact to='/dashboard/first' component={First}></Route>
                        <Route exact to='/dashboard/second' component={Second}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Dashboard;