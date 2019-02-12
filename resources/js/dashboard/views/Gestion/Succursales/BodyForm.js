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
         succursale: this.props.state.succursale,
      }
      if(line.code === '')
         return global.swal({
             title: "Erreur!",
             text: "Veuillez saisie le code",
             type: "error",
             icon: "error",
             timer: 2000
         });

      let succursale = this.props.succursales.find( elem => elem.code == line.code);
      if(succursale == null)
      {
         this.props.addsuccursale(line);
         global.swal({
             title: "success!",
             text: "Vous avez sauvegarder!",
             type: "success",
             icon: "success",
             timer: 2000
         });
      }
      else
      {
         this.edit(line);
         global.swal({
            title: "success!",
            text: "Vous avez modifier!",
            type: "success",
            icon: "success",
            timer: 2000
        });
      }
      // Reset State
      this.props.setStateNull();
   }
   edit(line) {
      const succursales = this.props.succursales;
      let libelleForEdit = succursales.find( elem => elem.code == line.code);
      libelleForEdit.succursale = line.succursale
      this.props.setstatesuccursalesempty();
      this.props.fetchsuccursales(succursales);
   }
   handleChange(e) {
      e.preventDefault();
      this.props.setStateChange(e.target.name,e.target.value)
   }
   nouveau(e) {
      e.preventDefault();
      const codePlus1 = parseInt(this.props.succursales[this.props.succursales.length -1].code) + 1;
      this.props.setStateId(codePlus1);
   }
   vider(e) {
      e.preventDefault();
      this.props.setStateNull();
   }
   render() {
      const list = this.props.succursales.map(elem => {
         return (
            <option key={elem.code} value={elem.code}>{elem.code} - {elem.succursale}</option>
         )
      });
      return (
         <React.Fragment>
            <CardBody>
               <Row>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Code</Label>
                        <Input
                           type="text"
                           name="code"
                           list="list_code"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.code}
                        />
                        <datalist id="list_code">
                           { list }
                        </datalist>
                     </FormGroup>
                  </Col>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Intitulé</Label>
                        <Input
                           type="text"
                           name="succursale"
                           onChange={(e) => this.handleChange(e)}
                           value={this.props.state.succursale}
                        />
                     </FormGroup>
                  </Col>
               </Row>
            </CardBody>
            <CardFooter>
               <Button type="submit" size="sm" color="success" onClick={(e) => this.sauvegarder(e)} ><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>
               <Button size="sm" color="primary" onClick={(e) => this.nouveau(e)} ><i className="fa fa-file"></i> Nouveau</Button>
               <Button size="sm" color="danger" onClick={(e) => this.vider(e)} ><i className="fa fa-ban"></i> Vider</Button>
            </CardFooter>
         </React.Fragment>
      );
   }
}

export default BodyForm;