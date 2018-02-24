import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Link } from "react-router-dom";

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

const products = [
{model: 'H50FT', plate: '1774H', serialNumber: 'A977Y11774H'},
{model: 'H50FT', plate: '1776H', serialNumber: 'A977Y11776H'},
{model: 'H50FT', plate: '2769J', serialNumber: 'A977Y12769J'},
{model: 'H50FT', plate: '3551J', serialNumber: 'A977Y13551J'},
{model: 'H50FT', plate: '3552J', serialNumber: 'A977Y13552J'},
{model: 'H50FT', plate: '3554J', serialNumber: 'A977Y13554J'},
{model: 'H50FT', plate: '3556J', serialNumber: 'A977Y13556J'}
];

const rowEvents = {
    onClick: (e, row, rowIndex) => {
      "<Link to="/" + {e.target.value}/>";
    }
  };

class Machines extends Component {
    render() {
        return (
            <div className="container">
                <BootstrapTable keyField='serialNumber'
                                data={ products }
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

export default Machines;