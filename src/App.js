import React, { Component } from 'react';
import Home from './Home';
import History from './History';

import { BrowserRouter, Route, NavLink ,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>        
        <ul className="header">
            <li><NavLink  exact to="/" activeStyle={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 34,
              
              
              
            }}>Home</NavLink></li>

            <li><NavLink  exact to="/notre-histoire" activeStyle={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 34,
            }}>History</NavLink></li>
           
        </ul>
        
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/notre-histoire" component={History}/>
        </Switch>

      </div>
      </BrowserRouter>
    )
  }
}

export default App;

