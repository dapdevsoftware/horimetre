import React, { Component } from 'react';
import Machines from './Machines';
import Readings from './Readings';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from "react-router";
import { Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

const history= createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Projeção de horímetros</h1>
          </header>
          <Machines/>
          <Route path="/:id" component={Readings} />
        </div>
      </Router>
    );
  }
}

export default App;

