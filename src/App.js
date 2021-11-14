import './App.css';
import React, { useState } from 'react';

import Routing from './route/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';


function App() {

  const getToken = () => {
    const tokenString = JSON.parse(localStorage.getItem('token'));
    return tokenString
  };
  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  console.log(token)
 
  if (!token) {

    return <Login setToken={saveToken} />
         
  }
  return (

    <BrowserRouter>
    <Switch>
      <Routing />
    </Switch>
    </BrowserRouter>
 
  );
}

export default App;
