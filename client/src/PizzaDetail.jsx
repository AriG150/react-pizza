import React, {Component} from 'react';
import './App.css'

const PizzaDetail = props => {
  return(
    <div>
      <h3>Details about your Pizza</h3>
      <h4>{props.match.params.id}</h4>
      <form>
        Edit Pizza Name: <input type="value"> </input>
        Edit Pizza Size: <input type="value"> </input>

      </form>
      
    </div>
  )
}

export default PizzaDetail;