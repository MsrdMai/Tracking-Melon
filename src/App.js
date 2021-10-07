import './App.css';
import Routing from './route/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Topnav from './components/Topnav'
import Home from "./contents/Home";
function App() {
  return (

      <Routing />
 
  );
}

export default App;
