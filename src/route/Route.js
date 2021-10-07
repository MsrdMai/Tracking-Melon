import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import Home from "../contents/Home";
import Login from '../components/Login';

class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Route exact path={"/"} component={Home} />
                    <Route exact  path={"/Login"} component={Login} />
        
                </Router>
            </div>
        );
    }
}

export default Routing;