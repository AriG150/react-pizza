import React, {Component} from 'react';


const AddTopping = (props) => {
  return(
    <div>
      <h3> Add a Topping to your order! </h3>
      <form>
        Add Topping: <input type="text"></input>
        <button type="submit" value="submit" > Add your Topping</button>
      </form>

    </div>
  )
}

export default AddTopping;