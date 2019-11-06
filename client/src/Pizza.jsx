import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';


class Pizza extends Component {

  render() {
    const mappedPizzas = this.props.pizza.map((pizza, id) => <li onClick={() => this.props.onClick(pizza)} key={id} > {pizza.size} - {pizza.name} 
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
        <div>
      <h3>Add To Your Order: </h3>
      <form>
        Type of pizza: <input type="text" 
                        name="pizzaType" 
                        value={this.props.nameValue}
                        onChange= {this.props.nameChange} /> 
        <br></br>
        Size of pizza: <input type="text" 
                              name="pizzaSize" 
                              value={this.props.sizeValue}
                              onChange = {this.props.sizeChange} /> 
        <br></br>
        <button type="submit" value="submit" onClick={(e) => this.props.newPizzaOrder(e)}> Add to Order </button>
      </form>
    </div>
      </div>
    )
  }
}

export default Pizza; 