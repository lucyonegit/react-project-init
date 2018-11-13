import React from 'react'
import { Provider } from "react-redux";
import { Router, Switch, Route } from 'react-router-dom';
import history from "./history"
import store from "../store/store"
import { Home, Login } from "../component/index"
const MainRoute = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Router>
        </Provider>)
}
export default MainRoute
