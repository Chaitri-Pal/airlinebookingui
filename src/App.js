import './App.css';
//import Button from 'react-bootstrap/Button';
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Airports from './pages/Airports';
import Flights from './pages/Flights';
import Users from './pages/Users' ;

import Login from './pages/Login';
import Register from './pages/Register';

import { Navbar } from 'react-bootstrap';

import Routers from './Components/Routers';
function App() {
  return (
    <Routers/>
  );

}

export default App;
