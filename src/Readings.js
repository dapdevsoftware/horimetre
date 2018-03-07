import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {withRouter} from 'react-router-dom';

const columns = [{
  dataField: 'id',
  hidden: true,
  text: ''
}, {
  dataField: 'date',
  text: 'Data',
  sort: true
}, {
  dataField: 'hours',
  text: 'Horímetro'
}
];

const readings = [
{id: 1, date: '17/12/2017', hours: '1774'},
{id: 2, date: '18/12/2017', hours: '2774'},
{id: 3, date: '19/12/2017', hours: '4774'},
{id: 4, date: '27/12/2017', hours: '6774'},
{id: 5, date: '28/12/2017', hours: '7774'},
{id: 6, date: '29/12/2017', hours: '7794'},
{id: 7, date: '30/12/2017', hours: '9774'}
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
    const { location } = this.props
    return (
        <div className="container">
            <h4 style={{ borderRadius: '0.25em', textAlign: 'center', padding: '0.5em' }}>Leituras da máquina {location.pathname.substring(1)}</h4>
            <AddReadings/>
            <Return/>
            <BootstrapTable keyField='id'
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