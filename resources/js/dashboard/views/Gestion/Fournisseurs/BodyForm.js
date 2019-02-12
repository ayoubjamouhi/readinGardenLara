import React from 'react';
import {
   CardBody,
   CardFooter,
   Button,
   Col,
   FormGroup,
   Input,
   Label,
   Row,
} from 'reactstrap';

class BodyForm extends React.Component {
   constructor() {
      super();
      this.handleChange = this.handleChange.bind(this);
      this.sauvegarder = this.sauvegarder.bind(this);
   }
   sauvegarder(e) {
      e.preventDefault();
      const line = {
         code: this.props.state.code,
         nom: this.props.state.nom,
         identifiant_fiscale: this.props.state.identifiant_fiscale,
         adresse: this.props.state.adresse,
         ville: this.props.state.ville,
         ice: this.props.state.ice
      }
      if(line.code == '')
         return global.swal({
             title: "Erreur!",
             text: "Veuillez saisie le code",
             type: "error",
             icon: "error",
             timer: 2000
         });
      this.props.addFournisseur(line);
      // Reset State
      this.props.setStateNull();
   }
   handleChange(e) {
      e.preventDefault();
      this.props.setStateChange(e.target.name,e.target.value)
   }
   vider(e) {
      e.preventDefault();
      this.props.setStateNull();
   }
   importerPlanComptable(e) {
      e.preventDefault();
      const plan_comptable = [
         {
            code: 3,
            nom: 'plan comptable 1',
            identifiant_fiscale: '253',
            adresse: 'adresse',
            ville: 'casa',
            ice: '15'
         },
         {
            code: 4,
            nom: 'plan comptable 2',
            identifiant_fiscale: '453',
            adresse: 'adresse2',
            ville: 'casa',
            ice: '44'
         }
      ];
      this.props.fetchFournisseurs(plan_comptable)
   }
   render() {
      const list_fournisseurs = this.props.fournisseurs.map(elem => {
         return (
            <option key={elem.code} value={elem.code}>{elem.code} - {elem.nom}</option>
         )
      });
      return (
         <React.Fragment>
            <CardBody>
               <Row>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Code Fournisseur</Label>
                        <Input
                           type="text"
                           name="code"
                           list="list_code"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.code}
                        />
                        <datalist id="list_code">
                           { list_fournisseurs }
                        </datalist>
                     </FormGroup>
                  </Col>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccyear">Nom Fournisseur</Label>
                        <Input
                           type="text"
                           name="nom"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.nom}
                        />
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Identifiant Fiscale</Label>
                        <Input
                           type="text"
                           name="identifiant_fiscale"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.identifiant_fiscale}
                        />
                     </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Addresse</Label>
                        <Input
                           type="textarea"
                           name="adresse"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.adresse}
                        />
                     </FormGroup>
                  </Col>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccyear">Ville</Label>
                        <Input
                           type="text"
                           name="ville"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.ville}
                        />
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">ICE</Label>
                        <Input
                           type="text"
                           name="ice"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.ice}
                        />
                     </FormGroup>
                  </Col>
               </Row>
            </CardBody>
            <CardFooter>
               <Button type="submit" size="sm" color="success" onClick={(e) => this.sauvegarder(e)} ><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>
               <Button size="sm" color="danger" onClick={(e) => this.vider(e)} ><i className="fa fa-ban"></i> Vider</Button>
               <Button size="sm" color="primary" onClick={(e) => this.importerPlanComptable(e)} ><i className="fa fa-caret-square-o-up
"></i>Importer Plan Comptable</Button>
            </CardFooter>
         </React.Fragment>
      );
   }
}

export default BodyForm;