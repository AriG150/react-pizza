import React, {Component} from 'react';


const AddTopping = (props) => {
  return(
    <div>
      <h3> Add a Topping to your order! </h3>
      <form>
        Add Topping: <input type="text"
                            value={props.toppingValue}
                            onChange={props.newTopppingChange}></input>
        <button type="submit" value="submit" onClick={(e) => props.newTopping(e)}> Add your Topping</button>
      </form>

    </div>
  )
}

export default AddTopping;