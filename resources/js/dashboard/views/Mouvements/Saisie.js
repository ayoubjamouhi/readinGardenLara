import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table,
  CustomInput
} from 'reactstrap';
import './Saisie.css';
class Saisie extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Saisie</strong> des Mouvements
            </CardHeader>
            <CardBody>
               <Row>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Journal</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="3">
                     <FormGroup>
                        <Label htmlFor="ccyear">Mois</Label>
                        <Input type="month" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">C-Partie</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="4">
                     <FormGroup>
                        <Label htmlFor="ccyear">Succursale</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
               </Row>
               <Row className="top-bar">
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Ligne</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">Le jour</Label>
                        <Input type="number" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">N°Pièce</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">Compte</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccyear">Designation</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">Dossier</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">N° Facture</Label>
                        <Input type="text" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">Débit</Label>
                        <Input type="number" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">Crédit</Label>
                        <Input type="number" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
                  <Col xs="1">
                     <FormGroup>
                        <Label htmlFor="ccyear">C-partie</Label>
                        <Input type="number" name="ccmonth" id="ccmonth" />
                     </FormGroup>
                  </Col>
               </Row>
               <Row className="table-row">
                  <Table hover bordered striped responsive size="sm">
                     <thead>
                        <tr>
                           <th width="2%">Ligne</th>
                           <th width="2%">Jour</th>
                           <th width="2%">N°Pièce</th>
                           <th width="2%">Compte</th>
                           <th>Designation</th>
                           <th width="2%">N°Dossier</th>
                           <th width="2%">N°Facture</th>
                           <th width="2%">Débit</th>
                           <th width="2%">Crédit</th>
                           <th width="5%">C-Partie</th>
                           <th width="2%">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                     {
                        /*
                        <tr>
                           <td>Vishnu Serghei</td>
                           <td>2012/01/01</td>
                           <td>Member</td>
                           <td>
                              <Badge color="success">Active</Badge>
                           </td>
                           <td>Member</td>
                           <td>Member</td>
                           <td>Member</td>
                           <td>Member</td>
                           <td>Member</td>
                           <td>Member</td>
                        </tr>
                        */
                     }
                     </tbody>
                  </Table>
               </Row>
            </CardBody>
            <CardFooter>
               <Row>
                  <Col xs="6">
                     <Button type="submit" size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Nouveau Journal</Button>
                     <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Fermer</Button>
                     <Button size="sm" color="primary"><i className="fa fa-refresh"></i> Transfert Journal</Button>
                     <Button size="sm" color="warning"><i className="cui-circle-x"></i> Suppression Journal</Button>
                  </Col>
                  <Col xs="6">
                        <Label htmlFor="ccmonth" sm={3}>Solde actuel</Label>
                        <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                  </Col>
               </Row>
               <Row>
                  <Col xs="6"></Col>
                  <Col xs="6">
                     <Label htmlFor="ccmonth" sm={3}>Ancien débit/crédit</Label>
                     <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                     <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                  </Col>
               </Row>
               <Row>
                  <Col xs="6"></Col>
                  <Col xs="6">
                     <Label htmlFor="ccmonth" sm={3}>Total débit/crédit</Label>
                     <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                     <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                  </Col>
               </Row>
               <Row>
                  <Col xs="6"></Col>
                  <Col xs="6">
                     <Label htmlFor="ccmonth" sm={3}>Solde</Label>
                     <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                     <CustomInput  type="text" name="ccmonth" id="ccmonth" />
                  </Col>
               </Row>
            </CardFooter>
         </Card>
      </div>
    );
  }
}

export default Saisie;
