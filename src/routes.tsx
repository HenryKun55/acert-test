import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Album from './pages/Album';
import History from './pages/History';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <PrivateRoute path="/home" component={Home} />
            <PrivateRoute path="/album" component={Album} />
            <PrivateRoute path="/history" component={History} />
        </Switch>
    </BrowserRouter>
)

export default Routes;