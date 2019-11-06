import React, {Component} from 'react';
import './App.css'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class PizzaDetail extends Component  {
  state = {
    name: '',
    size: '', 
    redirect: ''
  }

  componentDidMount = () => {
    axios.get(`/pizzas/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        name: response.data.name,
        size: response.data.size,
        redirect: ''
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`/pizzas/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        redirect: <Redirect  to={`/yourPizzas`}/>
      })
    })
  }

  render() {
    var output;
    if(this.state.redirect) {
      output = this.state.redirect
    } else {
      output = (
        <> 
          <h3>Details about your Pizza</h3>
          <form onSubmit={this.handleSubmit}>
            Edit pizza name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /> <br/>
            Edit pizza size: <input type="text" name="size" value={this.state.size} onChange={this.handleChange} /> <br/>
            <input type="submit" value="Update" />
          </form>
        </>
      )
    }
    return(
      <div>
        {output}
      </div>
    )
  }
}

export default PizzaDetail;