import React, {Component} from 'react';
import './App.css';
import AddPizza from './AddPizza';
import PizzaDetail from './PizzaDetail';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class Pizza extends Component {
  state = {
    pizzas: [],
    name: "",
    size: ""
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
  var data = {
    name: this.state.name,
    size: this.state.size
  }
  axios.post('/pizzas', data)
  .then((results) => {
    console.log(results.data)
  })
  this.setState = ({
    name: '',
    size: ''
  })
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onSizeChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }


  render() {
    const mappedPizzas = this.state.pizzas.map((pizza, id) => <li key={id} > {pizza.size} - {pizza.name} 
          <Link to={"/pizza/" + pizza._id}> Edit Details </Link> </li>)
    return(
      <div>
        <div>
          <h3> Your Order: </h3>
          <ul>
          {mappedPizzas}
          </ul>
          <hr/>
        </div>
        <AddPizza nameValue={this.state.name} 
                  sizeValue={this.state.size} 
                  newPizzaOrder={this.handleNewOrderClick} 
                  nameChange={this.onNameChange} 
                  sizeChange={this.onSizeChange}/> 

      </div>
    )
  }
}

export default Pizza; 