import React, {Component} from 'react';
import Home from './Home';
import Create from './Create';
import Header from './Header';
import Pizza from './Pizza';
import PizzaDetail from './PizzaDetail';


import axios from 'axios';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  state = {
    pizzas: [],
    name: "",
    size: "",
    selectedPizza: null
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

  handlePizzaSelect = (pizza) => {
    this.setState({
      selectedPizza: pizza
    })
  }

  handleEditChange = (e) => {
    e.preventDefault()
    axios.put(`/pizzas/${this.props.match.params.id}`, {
      name: this.state.name,
      size: this.state.size
    }).then(response => {

    })
    //read what user has inputed and save to database
    //pull what they wrote and change(update) state
    //reload /yourPizza
  }

  handleNewOrderClick = (e) => {
    e.preventDefault()
    var data = {
      name: this.state.name,
      size: this.state.size
    }
    var pizzasCopy = [...this.state.pizzas]
    axios.post('/pizzas', data)
    .then((results) => {
      console.log(results.data)
    })
    .then((results) => {
      pizzasCopy.push(results.data)
      console.log(pizzasCopy)
    })
    .then(
      this.setState = ({
        pizzas: pizzasCopy,
        name: '',
        size: ''
      })
    )   
  }

  render() {
    
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/createPizza" component={Create} /> 
          <Route exact path="/yourPizzas" render = {() => <Pizza pizza={this.state.pizzas} nameValue={this.state.name} 
                  sizeValue={this.state.size}  newPizzaOrder={this.handleNewOrderClick} nameChange={this.onNameChange} 
                  sizeChange={this.onSizeChange} onClick={this.handlePizzaSelect} />} /> 
          <Route path="/pizza/:id" render={ (props) => <PizzaDetail {...props}/>} />
        </div>
      </Router>
    )
  }
}



export default App;