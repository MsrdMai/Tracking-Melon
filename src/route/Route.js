import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Home from "../contents/Home";
import Login from '../components/Login';
import Register from '../components/Register';
import Product from '../contents/Product';
import Store from '../contents/Store';
import OrderFarm from '../contents/OrderFarm';
import OrderList from '../contents/OrderList';
import ReviewFarm from '../contents/ReviewFarm';
import ProductFarm from '../contents/ProductFarm';
import ProductDetail from '../contents/ProductDetail';
class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/Login"} component={Login} />
                    <Route exact path={"/Register"} component={Register} />
                    <Route exact path={"/Product"} component={Product} />
                    <Route exact path={"/Store"} component={Store} />
                    <Route exact path={"/OrderFarm"} component={OrderFarm} />
                    <Route exact path={"/ProductFarm"} component={ProductFarm} />
                    <Route exact path={"/ReviewFarm"} component={ReviewFarm} />
                    <Route exact path={"/OrderList"} component={OrderList} />
                    <Route exact path={"/ProductDetail"} component={ProductDetail} />
                </Router>
            </div>
        );
    }
}

export default Routing;