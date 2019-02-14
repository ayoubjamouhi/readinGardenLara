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

function BodyForm(props) {
   /*constructor() {
      super();
     handleChange =handleChange.bind(this);
     sauvegarder =sauvegarder.bind(this);
   }*/
   const sauvegarder = (e) => {
      e.preventDefault();
      const line = {
         code:props.state.code,
         article:props.state.article,
      }
      if(line.code === '')
         return global.swal({
             title: "Erreur!",
             text: "Veuillez saisie le code",
             type: "error",
             icon: "error",
             timer: 2000
      });

      let article =props.articles.find( elem => elem.code == line.code);
      if(article == null)
      {
        props.addarticle(line);
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
        edit(line);
         global.swal({
            title: "success!",
            text: "Vous avez modifier!",
            type: "success",
            icon: "success",
            timer: 2000
        });
      }
      // Reset State
     props.setStateNull();
   }
   const edit = (line) => {
      const articles =props.articles;
      let articleForEdit = articles.find( elem => elem.code == line.code);
      articleForEdit.article = line.article
     props.setstatearticlesempty();
     props.fetcharticles(articles);
   }
   const handleChange = (e) => {
      e.preventDefault();
     props.setStateChange(e.target.name,e.target.value)
   }
   const nouveau = (e) => {
      e.preventDefault();
      const codePlus1 = parseInt(props.articles[props.articles.length -1].code) + 1;
     props.setStateId(codePlus1);
   }
   const vider = (e) => {
      e.preventDefault();
     props.setStateNull();
   }
   const list =props.articles.map(elem => {
      return (
         <option key={elem.code} value={elem.code}>{elem.code} - {elem.article}</option>
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
                        onChange={(e) => handleChange(e)}
                        value={props.state.code}
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
                        name="article"
                        onChange={(e) =>handleChange(e)}
                        value={props.state.article}
                     />
                  </FormGroup>
               </Col>
            </Row>
         </CardBody>
         <CardFooter>
            <Button type="submit" size="sm" color="success" onClick={(e) =>sauvegarder(e)} ><i className="fa fa-dot-circle-o"></i> Sauvegarder</Button>
            <Button size="sm" color="primary" onClick={(e) =>nouveau(e)} ><i className="fa fa-file"></i> Nouveau</Button>
            <Button size="sm" color="danger" onClick={(e) =>vider(e)} ><i className="fa fa-ban"></i> Vider</Button>

         </CardFooter>
      </React.Fragment>
   );

}

export default BodyForm;