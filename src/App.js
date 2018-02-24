import React, { Component } from 'react';
import Machines from './Machines';
import Readings from './Readings';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Projeção de horímetros</h1>
          </header>
          <p className="App-intro">
            Máquinas
          </p>
          <Machines/>
          <Route path="/:id" component={Readings} />
        </div>
      </Router>
    );
  }
}

export default App;

