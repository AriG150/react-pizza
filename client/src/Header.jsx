import React, {Component} from 'react';
import './App.css';
import {
  Link
} from 'react-router-dom'



function Header (props) { 
    return(
      <nav>
      <Link to="/">HOME</Link> {' | '}
      <Link to="/createPizza">Create</Link> {' | '}
      <Link to="yourPizzas">Your Pizzas</Link>
    </nav>
    )
}

export default Header; 