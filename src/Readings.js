import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {withRouter} from 'react-router-dom';

const columns = [{
  dataField: 'model',
  text: 'Modelo'
}, {
  dataField: 'plate',
  text: 'Placa'
}, {
  dataField: 'serialNumber',
  text: 'Série'
}
];

const readings = [
{model: 'H50FT', plate: '1774H', serialNumber: 'A977Y11774H'},
{model: 'H50FT', plate: '1776H', serialNumber: 'A977Y11776H'},
{model: 'H50FT', plate: '2769J', serialNumber: 'A977Y12769J'},
{model: 'H50FT', plate: '3551J', serialNumber: 'A977Y13551J'},
{model: 'H50FT', plate: '3552J', serialNumber: 'A977Y13552J'},
{model: 'H50FT', plate: '3554J', serialNumber: 'A977Y13554J'},
{model: 'H50FT', plate: '3556J', serialNumber: 'A977Y13556J'}
];

const AddReadings = () => <button type="button"
  className="btn btn-primary"
  style={{float:'right', margin: '0 0 10px 10px'}}>
  Adicionar
</button>

const Return = withRouter(({history}) => <button type="button"
  className="btn"
  style={{float:'right', marginBottom: '10px'}}
  onClick={() => { history.push('/')}}
  >
  Voltar
</button>)

class Readings extends Component {
  render() {
    return (
        <div className="container">
            <h4 style={{ borderRadius: '0.25em', textAlign: 'center', padding: '0.5em' }}>Leituras</h4>
            <AddReadings/>
            <Return/>
            <BootstrapTable keyField='serialNUmber'
                            data={ readings }
                            columns={ columns }
                            striped
                            hover
                            condensed
            />
        </div>
    )
  }
}

export default Readings;