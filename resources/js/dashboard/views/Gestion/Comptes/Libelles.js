import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import BodyForm from './BodyForm';
import DataTable from './DataTable';

class Libelles extends Component {
   constructor(props) {
      super(props);
      this.del = this.del.bind(this);
      this.setStateChange = this.setStateChange.bind(this);
      this.setStateNull = this.setStateNull.bind(this);
      this.fillForm = this.fillForm.bind(this);
      this.setStateId = this.setStateId.bind(this);
      this.state = {
         code: '',
         libelle: ''
      };
   }
   componentDidMount() {
      // Fetch Fournisseurs
      const libelles = [
         {
            code: 1,
            libelle: 'test1'
         },
         {
            code: 2,
            libelle: 'test2'
         }
      ];
      if(this.props.libelles.length === 0)
         this.props.fetchlibelles(libelles);
   }
   del(id) {
      const libelles = this.props.libelles;
      libelles.splice(id, 1);
      console.log(libelles,this.props);
      this.props.setstatelibellesempty();
      this.props.fetchlibelles(libelles);
      this.setStateNull();
   }
   setStateChange(name, value) {
      this.setState({ [name]: value })
   }
   setStateNull() {
      this.setState({
         code: '',
         libelle: ''
      })
   }
   fillForm(line) {
      this.setState({
         code: line.code,
         libelle: line.libelle
      });
   }
   setStateId(id) {
      this.setState({
         code: id,
         libelle: ''
      });
   }
   render() {
      return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> des libelles
            </CardHeader>
            <BodyForm
               libelles={this.props.libelles}
               addlibelle={this.props.addlibelle}
               fetchlibelles={this.props.fetchlibelles}
               setstatelibellesempty={this.props.setstatelibellesempty}
               state={this.state}
               setStateChange={this.setStateChange}
               setStateNull={this.setStateNull}
               setStateId={this.setStateId}
            />
            <CardBody>
               <DataTable
                  libelles={this.props.libelles}
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
export default Libelles;
