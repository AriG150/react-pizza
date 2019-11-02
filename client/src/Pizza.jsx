import React, {Component} from 'react';
import './App.css';
import AddPizza from './AddPizza';
import axios from 'axios';


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
      name: e.target.nameValue
    })
  }

  onSizeChange = (e) => {
    this.setState({
      size: e.target.sizeValue
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