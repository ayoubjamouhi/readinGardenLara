import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import BodyForm from './BodyForm';
import DataTable from './DataTable';

class PlanComptable extends Component {
   constructor(props) {
      super(props);
      this.setStateChange = this.setStateChange.bind(this);
      this.setStateNull = this.setStateNull.bind(this);
      this.fillForm = this.fillForm.bind(this);
      this.del = this.del.bind(this);
      this.state = {
         compte: '',
         categorie: '',
         type: '',
         if: '',
         ice: '',
         intitule: ''
      };
   }

   componentDidMount() {
      // Fetch Fournisseurs
      const fournisseurs = [
         {
            compte: 342156,
            categorie: 'A',
            type: 'C',
            if: '',
            ice: '',
            intitule: 'text'
         },
         {
            compte: 4421569,
            categorie: 'G',
            type: 'C',
            if: '',
            ice: '',
            intitule: 'text2'
         }
      ];
      if(this.props.plancomptables.length === 0)
         this.props.fetchplancompatbles(fournisseurs);
   }
   setStateChange(name, value) {
      this.setState({ [name]: value })
   }
   setStateNull() {
      this.setState({
         compte: '',
         categorie: '',
         type: '',
         if: '',
         ice: '',
         intitule: ''
      })
   }
   fillForm(line) {
      this.setState({
         compte: line.compte,
         categorie: line.categorie,
         type: line.type,
         if: line.if,
         ice: line.ice,
         intitule: line.intitule,
      });
   }
   del(id) {
      const plancomptables = this.props.plancomptables;
      plancomptables.splice(id, 1);
      this.props.setstateplancompatbleempty();
      this.props.fetchplancompatbles(plancomptables);
      this.setStateNull();
   }
   render() {
      return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> du Plan Comptable
            </CardHeader>
            <BodyForm
               plancomptables={this.props.plancomptables}
               addplancompatble={this.props.addplancompatble}
               fetchplancompatbles={this.props.fetchplancompatbles}
               state={this.state}
               setStateChange={this.setStateChange}
               setStateNull={this.setStateNull}
            />
            <CardBody>
               <DataTable
                  plancomptables={this.props.plancomptables}
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
export default PlanComptable;
