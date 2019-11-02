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
  

  render() {
    const mappedToppings = this.state.toppings.map((topping, id) => <p key={id} > Your toppings: {topping.name} </p> )
    return(
    <>
      <h1> Get ready to Build! </h1>
      <p> Your Toppings </p>
      {mappedToppings}
      <hr></hr>
      <AddTopping  /> 
    </>
    )
  }
}

export default Create;
