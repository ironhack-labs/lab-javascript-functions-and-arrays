import React from 'react';
import Search from "./components/search";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Notfound from "./components/not-fount-404";
import App from "./App";

export const routing = (
    <Router>
        <div>
            <Route path="/" exact component={App}/>
            <Route path="/search" component={Search}/>
            <Switch>
                <Route path='/404' exact component={Notfound}/>
            </Switch>
        </div>
    </Router>
);

