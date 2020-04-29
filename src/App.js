import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar'
import About from './about'
import Shop from './shop'
import Cart from './cart'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <h1> I watch too much twitch</h1>
      <NavBar/>
      <Switch>
      <Route path ="/about"  component ={About}/>
      <Route path ="/shop"  component ={Shop}/>
      <Route path ="/cart"  component ={Cart}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
