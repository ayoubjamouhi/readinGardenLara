import React, { useState, useEffect } from 'react';
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
function BodyForm(props) {
   /*const html = props.article.html;
   const contentBlock = htmlToDraft(html);
   const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
   const IniteditorState = EditorState.createWithContent(contentState);
   const [editorState, setEditorState] = useState(IniteditorState);*/
   useEffect( () => {
   })
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
      props.setStateChange(e.target.name, e.target.value)
      //setState({ [e.target.name]: e.target.value })
   }
   const vider = function (e) {
      e.preventDefault();
      // Reset State
      props.setStateNull();
   }
   return (
      <React.Fragment>
         <CardBody>
            <Row>
               <Col xs="6">
                  <FormGroup>
                     <Label htmlFor="title">Title</Label>
                     <Input
                        type="textarea"
                        name="title"
                        id="title"
                        onChange={(e) => handleChange(e)}
                        value={props.article.title}
                     />
                  </FormGroup>
               </Col>
               <Col xs="6">
                  <FormGroup>
                     <Label htmlFor="description">Description</Label>
                     <Input
                        type="textarea"
                        name="description"
                        id="description"
                        onChange={(e) => handleChange(e)}
                        value={props.article.description}
                     />
                  </FormGroup>
               </Col>
               <Col xs="4">
                  <FormGroup>
                     <Label htmlFor="categorie">Categorie</Label>
                     <Input
                        type="select"
                        name="categorie"
                        id="categorie"
                        onChange={(e) => handleChange(e)}
                     >
                        <option>--</option>
                        <option value="javascript" selected={props.article.categorie == 'javascript' ? 'selected' : false}>Javascript</option>
                        <option value="healty" selected={props.article.categorie == 'health' ? 'selected' : false}>Health</option>
                     </Input>
                  </FormGroup>
               </Col>
               <Col xs="6">
                  <FormGroup>
                     <Label htmlFor="slug">Slug</Label>
                     <Input
                        type="text"
                        name="slug"
                        id="slug"
                        onChange={(e) => handleChange(e)}
                        value={props.article.slug}
                     />
                  </FormGroup>
               </Col>
               <Col xs="6">
                  <FormGroup>
                     <Label htmlFor="credit">Credit</Label>
                     <Input
                        type="text"
                        name="credit"
                        id="credit"
                        onChange={(e) => handleChange(e)}
                        value={props.article.credit}
                     />
                  </FormGroup>
               </Col>
               <Col xs="2">
                  <FormGroup >
                     <Label htmlFor="is_featured">is Featured</Label>
                     <Input
                        type="select"
                        name="is_featured"
                        id="is_featured"
                        onChange={(e) => handleChange(e)}

                     >
                        <option>--</option>
                        <option value="1" selected={props.article.is_featured == 1 ? 'selected' : false} >Yes</option>}
                        <option value="0" selected={props.article.is_featured == 0 ? 'selected' : false} >No</option>
                     </Input>
                  </FormGroup>
               </Col>
            </Row>
            <Row>
               <Col md="12">
                  <Input
                        type="textarea"
                        name="html"
                        id="html"
                        onChange={(e) => handleChange(e)}
                        value={props.article.html}
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