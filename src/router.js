import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ContactInfo from './pages/contactinfo';
import Home from './pages/home';
import Login from './pages/login';
import NewItem from './pages/newitem';
import Profile from './pages/profile';
import PublicProfile from './pages/publicprofile';
import Registration from './pages/registration';
import Search from './pages/search';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/contactinfo" component={ContactInfo} />
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/newitem" component={NewItem} />
                <Route path="/profile" component={Profile} />
                <Route path="/publicprofile" component={PublicProfile} />
                <Route path="/Registration" component={Registration} />
                <Route path="/Search" component={Search} />                
            </Switch>
        </BrowserRouter>
    );
}