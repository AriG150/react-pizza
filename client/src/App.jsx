import React, {Component} from 'react';
import Home from './Home';
import Create from './Create';
import Header from './Header';
import Pizza from './Pizza';
// import AddPizza from './AddPizza';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/createPizza" component={Create} /> 
          <Route path="/yourPizzas" component={Pizza} /> 
          {/* <Route path="/AddPizza" component={AddPizza} /> */}
        </div>
      </Router>
    )
  }
}



export default App;