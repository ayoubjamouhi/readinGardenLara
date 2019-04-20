/*import React from 'react';
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
      const journal = {
         code: this.props.journal.code_journal,
         intitule: this.props.journal.code_journal_intitule,
         contrepartie: this.props.journal.contre_parties,
         contrepartie_intitule: this.props.journal.contre_parties_intitule,
         type: this.props.journal.type,
      }
      this.props.addJournal(journal);
      // Reset State
      this.props.setStateNull();
   }
   handleChange(e) {
      e.preventDefault();
      console.log(e.target.value);
      this.props.setStateChange(e.target.name,e.target.value)
      //this.setState({ [e.target.name]: e.target.value })
   }
   vider(e) {
      e.preventDefault();
      // Reset State
      this.setState({
         code_journal: '',
         code_journal_intitule:'',
         contre_parties:'',
         contre_parties_intitule:'',
         type:'achats',
      })
   }
   render() {
      const list_journal = this.props.journaux.map(elem => {
         return (
            <option key={elem.code} value={elem.code}>{elem.code} - {elem.intitule}</option>
         )
      });
      const list_contre_parties = this.props.contreparties.map(elem => {
         return (
            <option key={elem.COMPLN} value={elem.COMPLN}>{elem.COMPLN} - {elem.INTITULE}</option>
         )
      });
      console.log(this.props.journal.code_journal);
      return (
         <React.Fragment>
            <CardBody>
               <Row>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Code Journal</Label>
                        <Input
                        type="text"
                        name="code_journal"
                        id="ccmonth" list="list_journal"
                        onChange={(e) => this.handleChange(e)}
                        value={this.props.journal.code_journal}
                        />
                        <datalist id="list_journal">
                           { list_journal }
                        </datalist>
                     </FormGroup>
                  </Col>
                  <Col xs="4">
                     <FormGroup>
                        <Label htmlFor="ccyear">Intitulé</Label>
                        <Input type="text" name="code_journal_intitule" id="ccmonth"
                        onChange={(e) => this.handleChange(e)}
                        value={this.props.journal.code_journal_intitule}
                        />
                     </FormGroup>
                  </Col>
                  <Col xs="2">
                     <FormGroup>
                        <Label htmlFor="ccmonth">Contre Partie</Label>
                        <Input
                        type="text" name="contre_parties" id="ccmonth" list="list_contre_parties" onChange={(e) => this.handleChange(e)}
                        value={this.props.journal.contre_parties}
                        />
                        <datalist id="list_contre_parties">
                           { list_contre_parties }
                        </datalist>
                     </FormGroup>
                  </Col>
                  <Col xs="4">
                     <FormGroup>
                        <Label htmlFor="ccyear">Intitulé</Label>
                        <Input t
                        ype="text" name="contre_parties_intitule"
                        id="ccmonth"
                        onChange={(e) => this.handleChange(e)}
                        value={this.props.journal.contre_parties_intitule}
                        />
                     </FormGroup>
                  </Col>
                  <Col xs="8">
                     <FormGroup row>
                        <Col md="3">
                           <Label>Type</Label>
                        </Col>
                        <Col md="9">
                           <FormGroup check inline>
                              <Input className="form-check-input" type="radio" id="inline-radio1" name="type" value="achats" onChange={(e) => this.handleChange(e)} checked={this.props.journal.type === 'achats'}
                              />
                              <Label className="form-check-label" check htmlFor="inline-radio1">Achats</Label>
                           </FormGroup>
                           <FormGroup check inline>
                              <Input className="form-check-input" type="radio" id="inline-radio2" name="type" value="ventes" onChange={(e) => this.handleChange(e)} checked={ this.props.journal.type === 'ventes' }
                              />
                              <Label className="form-check-label" check htmlFor="inline-radio2">Ventes</Label>
                           </FormGroup>
                           <FormGroup check inline>
                              <Input
                              className="form-check-input" type="radio"
                              id="inline-radio3" name="type"
                              value="thresorerie"
                              onChange={(e) => this.handleChange(e)}
                              checked={ this.props.journal.type === 'thresorerie' }
                              />
                              <Label
                              className="form-check-label"
                              check htmlFor="inline-radio3">Thrésorerie</Label>
                           </FormGroup>
                           <FormGroup check inline>
                              <Input
                              className="form-check-input" type="radio"
                              id="inline-radio3" name="type" value="opetations_divers"
                              onChange={(e) => this.handleChange(e)}
                              checked={this.props.journal.type === 'opetations_divers'}
                              />
                              <Label className="form-check-label" check htmlFor="inline-radio3">Opérations Divers</Label>
                           </FormGroup>
                        </Col>
                        </FormGroup>
                     </Col>
               </Row>
            </CardBody>
            <CardFooter>
               <Button type="submit" size="sm" color="success" onClick={(e) => this.sauvegarder(e)} ><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>
               <Button type="reset" size="sm" color="danger" onClick={(e) => this.vider(e)} ><i className="fa fa-ban"></i> Vider</Button>
            </CardFooter>
         </React.Fragment>
      );
   }
}
*/
import React, { useState } from 'react';
import {
   CardBody,
   CardFooter,
   Button,
   Col,
   FormGroup,
   Input,
   Label,
   Row
} from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function BodyForm (props) {
   const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
   const contentBlock = htmlToDraft(html);
   const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
   let IniteditorState = EditorState.createWithContent(contentState);

   const [ editorState , setEditorState] = useState(IniteditorState);
   const sauvegarder = function (e) {
      e.preventDefault();
      const journal = {
         code: props.journal.code_journal,
         intitule: props.journal.code_journal_intitule,
         contrepartie: props.journal.contre_parties,
         contrepartie_intitule: props.journal.contre_parties_intitule,
         type: props.journal.type,
      }
      props.addJournal(journal);
      // Reset State
      props.setStateNull();
   }
   const handleChange = function (e) {
      e.preventDefault();
      console.log(e.target.value);
      props.setStateChange(e.target.name,e.target.value)
      //setState({ [e.target.name]: e.target.value })
   }
   const vider = function (e) {
      e.preventDefault();
      // Reset State
      setState({
         code_journal: '',
         code_journal_intitule:'',
         contre_parties:'',
         contre_parties_intitule:'',
         type:'achats',
      })
   }
   const list_articles = props.articles.map(elem => {
      return (
         <option key={elem.id} value={elem.id}>{elem.id} - {elem.descreption}</option>
      )
   });
   return (
      <React.Fragment>
         <CardBody>
            <Row>
               <Col xs="2">
                  <FormGroup>
                     <Label htmlFor="ccmonth">Code Journal</Label>
                     <Input
                     type="text"
                     name="code_journal"
                     id="ccmonth" list="list_journal"
                     /*onChange={(e) => handleChange(e)}
                     value={props.journal.code_journal}*/
                     />
                     <datalist id="list_journal">
                        { /*list_journal*/ }
                     </datalist>
                  </FormGroup>
               </Col>
               <Col xs="4">
                  <FormGroup>
                     <Label htmlFor="ccyear">Intitulé</Label>
                     <Input type="text" name="code_journal_intitule" id="ccmonth"
                     onChange={(e) => handleChange(e)}
                     /*value={props.journal.code_journal_intitule}*/
                     />
                  </FormGroup>
               </Col>
               <Col xs="2">
                  <FormGroup>
                     <Label htmlFor="ccmonth">Contre Partie</Label>
                     <Input
                     type="text" name="contre_parties" id="ccmonth" list="list_contre_parties" onChange={(e) => handleChange(e)}
                     /*value={props.journal.contre_parties}*/
                     />
                     <datalist id="list_contre_parties">
                        { /*list_contre_parties*/ }
                     </datalist>
                  </FormGroup>
               </Col>
               <Col xs="4">
                  <FormGroup>
                     <Label htmlFor="ccyear">Intitulé</Label>
                     <Input t
                     ype="text" name="contre_parties_intitule"
                     id="ccmonth"
                     onChange={(e) => handleChange(e)}
                     /*value={props.journal.contre_parties_intitule}*/
                     />
                  </FormGroup>
               </Col>
               <Col xs="8">
                  <FormGroup row>
                     <Col md="3">
                        <Label>Type</Label>
                     </Col>
                     <Col md="9">
                        <FormGroup check inline>
                           <Input
                              className="form-check-input" type="radio"
                              id="inline-radio1"
                              name="type"
                              value="achats"
                              onChange={(e) => handleChange(e)}
                              /*checked={props.journal.type === 'achats'}*/
                           />
                           <Label className="form-check-label" check htmlFor="inline-radio1">Achats</Label>
                        </FormGroup>
                        <FormGroup check inline>
                           <Input className="form-check-input" type="radio" id="inline-radio2" name="type" value="ventes" onChange={(e) => handleChange(e)} /*checked={ props.journal.type === 'ventes' }*/
                           />
                           <Label className="form-check-label" check htmlFor="inline-radio2">Ventes</Label>
                        </FormGroup>
                        <FormGroup check inline>
                           <Input
                           className="form-check-input" type="radio"
                           id="inline-radio3" name="type"
                           value="thresorerie"
                           onChange={(e) => handleChange(e)}
                           /*checked={ props.journal.type === 'thresorerie' }*/
                           />
                           <Label
                           className="form-check-label"
                           check htmlFor="inline-radio3">Thrésorerie</Label>
                        </FormGroup>
                        <FormGroup check inline>
                           <Input
                           className="form-check-input" type="radio"
                           id="inline-radio3" name="type" value="opetations_divers"
                           onChange={(e) => handleChange(e)}
                           /*checked={props.journal.type === 'opetations_divers'}*/
                           />
                           <Label className="form-check-label" check htmlFor="inline-radio3">Opérations Divers</Label>
                        </FormGroup>
                     </Col>
                     </FormGroup>
                  </Col>
            </Row>
            <Row>
               <Col md="12">
                  <Editor
                     editorState={editorState}
                     onEditorStateChange={editorState => setEditorState(editorState)}
                  />
               </Col>
            </Row>
         </CardBody>
         <CardFooter>
            <Button type="submit" size="sm" color="success" onClick={(e) => sauvegarder(e)} ><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>
            <Button type="reset" size="sm" color="danger" onClick={(e) => vider(e)} ><i className="fa fa-ban"></i> Vider</Button>
         </CardFooter>
      </React.Fragment>
   );
}

export default BodyForm;