import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {withRouter} from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap' 

const columns = [{
  dataField: 'model',
  text: 'Modelo'
}, {
  dataField: 'plate',
  text: 'Placa'
}, {
  dataField: 'serialNumber',
  text: 'Série'
}, {
  dataField: 'lastRead',
  text: 'Horímetro'
}, {
  dataField: 'nextMaintenance',
  text: 'Próxima manutenção'
}
];

const machines = [
{model: 'H50FT', plate: '1774H', serialNumber: 'A977Y11774H', lastRead: 11012, nextMaintenance: "01/04/2018 - 15000"},
{model: 'H50FT', plate: '1776H', serialNumber: 'A977Y11776H', lastRead: 12012, nextMaintenance: "01/04/2018 - 15000"},
{model: 'H50FT', plate: '2769J', serialNumber: 'A977Y12769J', lastRead: 15012, nextMaintenance: "01/04/2018 - 15000"},
{model: 'H50FT', plate: '3551J', serialNumber: 'A977Y13551J', lastRead: 16012, nextMaintenance: "01/04/2018 - 15000"},
{model: 'H50FT', plate: '3552J', serialNumber: 'A977Y13552J', lastRead: 17012, nextMaintenance: "01/04/2018 - 15000"},
{model: 'H50FT', plate: '3554J', serialNumber: 'A977Y13554J', lastRead: 17812, nextMaintenance: "01/04/2018 - 15000"},
{model: 'H50FT', plate: '3556J', serialNumber: 'A977Y13556J', lastRead: 19012, nextMaintenance: "01/04/2018 - 15000"}
];

class Machines extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.history.push({pathname: '/machine/add'});
  }

  render() {     
    const rowEvents = {
      onClick: (e, row, rowIndex) =>
        {
          this.props.history.push({pathname: '/' + row.serialNumber});
        }
    };

    return (
        <div className="container">
            <h4 style={{ borderRadius: '0.25em', textAlign: 'center', padding: '0.5em' }}>Máquinas</h4>
            <button type="button"
              className="btn btn-primary"
              style={{float:'right', marginBottom: '10px'}}
              onClick={this.handleAdd }
            >
            Adicionar
            </button>           
            <BootstrapTable keyField='serialNumber'
                            data={ machines }
                            columns={ columns }
                            striped
                            hover
                            condensed
                            rowEvents={ rowEvents }
            />
        </div>
    )
  }
}

export default withRouter(Machines);