import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import './Create.css';

const Return = withRouter(({history}) => <button type="button"
  className="btn"
  onClick={() => { history.push('/')}}
  >
  Voltar
</button>)

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      hours: "",
    };
  }

  validateForm() {
    return this.state.date.length > 0 && this.state.hours.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Create">
        <h4 style={{ borderRadius: '0.25em', textAlign: 'center', padding: '0.5em' }}>Adicionar Leitura</h4>
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="serialNumber" bsSize="large">
            <ControlLabel>Data</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.date}
              onChange={this.handleChange}
            />
          </FormGroup>        
          <FormGroup controlId="hours" bsSize="large">
            <ControlLabel>Horímetro</ControlLabel>
            <FormControl
              value={this.state.hours}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            disabled={!this.validateForm()}
            type="submit"
            className="btn btn-primary"
          >
            Adicionar
          </Button>
          <Return />
        </form>
      </div>
    );
  }
}

export default withRouter(Create);