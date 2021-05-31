import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/> {/* Route from HOME */}
        <Route path='/services' component={Services}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/signup' componen={SignUp}></Route>
      </Switch> 
    </Router>
    </>
  );
}

export default App;
