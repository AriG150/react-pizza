import React, {Component} from 'react';
import AddTopping from './AddTopping';
import axios from 'axios';


class Create extends Component {
  state= {
    toppings: [],
    name: ""
  }

  componentDidMount= () => {
    fetch("/toppings")
    .then(response => response.json())
    .then(json => {
      this.setState({
        toppings: json
      })
    })
  }
  
  handleNewToppingClick = (e) => {
    e.preventDefault()
    var data = {
      name: this.state.name
    }
    axios.post('/toppings', data)
    .then((results) => {
      console.log(results.data)
    })
    this.setState({
      name: e.target.value
    })
  }

  onNameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const mappedToppings = this.state.toppings.map((topping, id) => <p key={id} > Your toppings: {topping.name} </p> )
    return(
    <>
      <h1> Get ready to Build! </h1>
      <p> Your Toppings </p>
      {mappedToppings}
      <hr></hr>
      <AddTopping toppingValue={this.state.name} newTopping={this.handleNewToppingClick} newTopppingChange={this.onNameChange}/> 
    </>
    )
  }
}

export default Create;
