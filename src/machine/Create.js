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
      model: "",
      plate: "",
      serialNumber: "",
      lastRead: ""
    };
  }

  validateForm() {
    return this.state.serialNumber.length > 0;
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
        <h4 style={{ borderRadius: '0.25em', textAlign: 'center', padding: '0.5em' }}>Adicionar Máquina</h4>
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="serialNumber" bsSize="large">
            <ControlLabel>Série</ControlLabel>
            <FormControl
              autoFocus
              value={this.state.serialNumber}
              onChange={this.handleChange}
            />
          </FormGroup>        
          <FormGroup controlId="model" bsSize="large">
            <ControlLabel>Modelo</ControlLabel>
            <FormControl
              value={this.state.model}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="plate" bsSize="large">
            <ControlLabel>Placa</ControlLabel>
            <FormControl
              value={this.state.plate}
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