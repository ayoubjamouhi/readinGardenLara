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
         compte: this.props.state.compte,
         categorie: this.props.state.categorie,
         type: this.props.state.type,
         if: this.props.state.if,
         ice: this.props.state.ice,
         intitule: this.props.state.intitule
      }
      if(line.compte === '')
         return global.swal({
             title: "Erreur!",
             text: "Veuillez saisie le code",
             type: "error",
             icon: "error",
             timer: 2000
         });
      this.props.addplancompatble(line);
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
   render() {
      const list = this.props.plancomptables.map(elem => {
         return (
            <option key={elem.compte} value={elem.compte}>{elem.compte} - {elem.intitule}</option>
         )
      });
      return (
         <React.Fragment>
            <CardBody>
               <Row>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Compte</Label>
                        <Input
                           type="text"
                           name="compte"
                           list="list_compte"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.compte}
                        />
                        <datalist id="list_compte">
                           { list }
                        </datalist>
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccyear">Catégorie</Label>
                        <Input
                           type="select"
                           name="categorie"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.categorie}>
                           <option value="A">Auxiliaire</option>
                           <option value="G">Général</option>
                        </Input>

                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Type</Label>
                        <Input
                           type="select"
                           name="type"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.type}>
                           <option value="C">Centralisé</option>
                        </Input>
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">I.F</Label>
                        <Input
                           type="text"
                           name="if"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.if}
                        />
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">I.C.E</Label>
                        <Input
                           type="text"
                           name="ice"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.ice}
                        />
                     </FormGroup>
                  </Col>
               </Row>
               <Row>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Intitulé</Label>
                        <Input
                           type="textarea"
                           name="intitule"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.intitule}
                        />
                     </FormGroup>
                  </Col>
               </Row>
            </CardBody>
            <CardFooter>
               <Button type="submit" size="sm" color="success" onClick={(e) => this.sauvegarder(e)} ><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>
               <Button size="sm" color="danger" onClick={(e) => this.vider(e)} ><i className="fa fa-ban"></i> Vider</Button>

            </CardFooter>
         </React.Fragment>
      );
   }
}

export default BodyForm;