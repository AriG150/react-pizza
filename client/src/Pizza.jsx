import React, {Component} from 'react';
import './App.css';
import AddPizza from './AddPizza';
import {
  Link 
} from 'react-router-dom'


class Pizza extends Component {
  state = {
    pizzas: []
  }

  componentDidMount = () => {
    fetch("/pizzas")
    .then(response => response.json())
    .then(json => {
      this.setState({
        pizzas: json
      })
    })
  }

  handleNewOrderClick = (e) => {
    e.preventDefault()
    console.log("button clicked")
    const pizzaCopy = [...this.state.pizzas]
    this.setState({
      pizzas: pizzaCopy
    })
  }

  render() {
    const mappedPizzas = this.state.pizzas.map((pizza, id) => <p key={id} > {pizza.size} {pizza.name} -  ${pizza.price} </p>)
    return(
      <div>
        <div>
          <h3> Your Order: </h3>
          {mappedPizzas}
          <hr/>
        </div>
        <AddPizza newPizzaOrder={this.handleNewOrderClick}/> 
      </div>
    )
  }
}

export default Pizza; 