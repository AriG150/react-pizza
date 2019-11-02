import React, {Component} from 'react';
import './App.css'


const AddPizza = props => {
  return(
    <div>
      <h3>Add To Your Order: </h3>
      <form>
        Type of pizza: <input type="text" 
                        name="pizzaType" 
                        value={props.nameValue}
                        onChange= {(e) => props.nameChange}></input>                         
        <br></br>
        Size of pizza: <input type="text" 
                              name="pizzaSize" 
                              value={props.sizeValue}
                              onChange = {(e) => props.sizeChange}></input>                       
        <br></br>
        <button type="submit" value="submit" onClick={(e) => props.newPizzaOrder(e)}> Add to Order </button>
      </form>
    </div>
  )
}


export default AddPizza;