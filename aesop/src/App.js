import React, { Component } from 'react'
import './App.css';

import {Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'; 

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }


  }


  render() {
    return (
      <div className="App">


        <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/Page1">Page1</Link>
                </li>
                <li>
                  <Link to="/Page2">Page2</Link>
                </li>
                <li>
                  <Link to="/Page3">Page3</Link>
                </li>
                <li>
                  <Link to="/Page4">Page4</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route exact path="/Page1" component={Page1} />

              <Route exact path="/Page2" component={Page2} />

              <Route exact path="/Page3" component={Page3} />

              <Route exact path="/Page4" component={Page4} />
            </Switch>
        </Router>



      </div>
    )
  }
}

