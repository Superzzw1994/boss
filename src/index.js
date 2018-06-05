import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { createStore, applyMiddleware, compose} from 'redux'
import { counter } from './index.redux'
import { Provider } from 'react-redux'
const reduxDev = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDev))
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))

