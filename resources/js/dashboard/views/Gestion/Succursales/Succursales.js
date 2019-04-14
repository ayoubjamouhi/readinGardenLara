import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import BodyForm from './BodyForm';
import DataTable from './DataTable';

class Succursales extends Component {
   constructor(props) {
      super(props);
      this.del = this.del.bind(this);
      this.setStateChange = this.setStateChange.bind(this);
      this.setStateNull = this.setStateNull.bind(this);
      this.fillForm = this.fillForm.bind(this);
      this.setStateId = this.setStateId.bind(this);
      this.state = {
         code: '',
         succursale: ''
      };
   }
   componentDidMount() {
      // Fetch Fournisseurs
      const succursales = [
         {
            code: 1,
            succursale: 'test1'
         },
         {
            code: 2,
            succursale: 'test2'
         }
      ];
      if(this.props.succursales.length === 0)
         this.props.fetchsuccursales(succursales);
   }
   del(id) {
      const succursales = this.props.succursales;
      this.props.succursales.splice(id, 1);
      this.props.setstatesuccursalesempty();
      this.props.fetchsuccursales(succursales);
      this.setStateNull();
   }
   setStateChange(name, value) {
      this.setState({ [name]: value })
   }
   setStateNull() {
      this.setState({
         code: '',
         succursale: ''
      })
   }
   fillForm(line) {
      this.setState({
         code: line.code,
         succursale: line.succursale
      });
   }
   setStateId(id) {
      this.setState({
         code: id,
         succursale: ''
      });
   }
   render() {
      return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> des Succursales
            </CardHeader>
            <BodyForm
               succursales={this.props.succursales}
               addsuccursale={this.props.addsuccursale}
               fetchsuccursales={this.props.fetchsuccursales}
               setstatesuccursalesempty={this.props.setstatesuccursalesempty}
               state={this.state}
               setStateChange={this.setStateChange}
               setStateNull={this.setStateNull}
               setStateId={this.setStateId}
            />
            <CardBody>
               <DataTable
                  succursales={this.props.succursales}
                  state={this.state}
                  fillForm={this.fillForm}
                  del={this.del}
               />
            </CardBody>
         </Card>
      </div>
      );
   }
}
export default Succursales;
