import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import BodyForm from './BodyForm';
import DataTable from './DataTable';

class Fournisseurs extends Component {
   constructor(props) {
      super(props);
      this.setStateChange = this.setStateChange.bind(this);
      this.setStateNull = this.setStateNull.bind(this);
      this.fillForm = this.fillForm.bind(this);
      this.del = this.del.bind(this);
      this.state = {
         code: '',
         nom: '',
         identifiant_fiscale: '',
         adresse: '',
         ville: '',
         ice: ''
      };
   }

   componentDidMount() {
      // Fetch Fournisseurs
      const fournisseurs = [
         {
            code: 1,
            nom: 'Fournisseur 1',
            identifiant_fiscale: '253',
            adresse: 'adresse',
            ville: 'casa',
            ice: '15'
         },
         {
            code: 2,
            nom: 'Fournisseur 2',
            identifiant_fiscale: '453',
            adresse: 'adresse2',
            ville: 'casa',
            ice: '44'
         }
      ];
      if(this.props.fournisseurs.length === 0)
         this.props.fetchFournisseurs(fournisseurs);
   }
   setStateChange(name, value) {
      this.setState({ [name]: value })
   }
   setStateNull() {
      this.setState({
         code: '',
         nom: '',
         identifiant_fiscale: '',
         adresse: '',
         ville: '',
         ice: ''
      })
   }
   fillForm(line) {
      this.setState({
         code: line.code,
         nom: line.nom,
         identifiant_fiscale: line.identifiant_fiscale,
         adresse: line.adresse,
         ville: line.ville,
         ice: line.ice
      })
   }
   del(id) {
      const fournisseurs = this.props.fournisseurs;
      fournisseurs.splice(id, 1);
      this.props.setStateFournisseursEmpty();
      this.props.fetchFournisseurs(fournisseurs);
      this.setStateNull();
   }
   render() {
      return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> des Fournisseurs
            </CardHeader>
            <BodyForm
               fournisseurs={this.props.fournisseurs}
               addFournisseur={this.props.addfournisseur}
               fetchFournisseurs={this.props.fetchFournisseurs}
               state={this.state}
               setStateChange={this.setStateChange}
               setStateNull={this.setStateNull}

            />
            <CardBody>
               <DataTable
                  fournisseurs={this.props.fournisseurs}
                  journal={this.state}
                  fillForm={this.fillForm}
                  del={this.del}
               />
            </CardBody>
         </Card>
      </div>
      );
   }
}
export default Fournisseurs;
