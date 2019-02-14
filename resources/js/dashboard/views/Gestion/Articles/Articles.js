import React, { useEffect, useState } from 'react';
import {
   Card,
   CardHeader,
   CardBody
} from 'reactstrap';

import BodyForm from './BodyForm';
import DataTable from './DataTable';

function Articles(props) {
   /*constructor(props) {
      super(props);
      del = del.bind(this);
      setStateChange = setStateChange.bind(this);
      setStateNull = setStateNull.bind(this);
      fillForm = fillForm.bind(this);
      setStateId = setStateId.bind(this);
      state = {
         code: '',
         libelle: ''
      };
   }*/
   const [code, setCode] = useState('');
   const [libelle, setLibelle] = useState('');
   useEffect(() => {
      console.log(props);
      // Fetch Fournisseurs
      const articles = [
         {
            code: 1,
            libelle: 'test1'
         },
         {
            code: 2,
            libelle: 'test2'
         }
      ];
      console.log(props.articles.length );
      if (props.articles.length === 0)
      {
         console.log(articles);
         console.log(props.fetcharticles);
         props.fetcharticles(articles);
      }
   });

   const del = (id) => {
      const articles = props.articles;
      articles.splice(id, 1);
      console.log(articles, props);
      props.setstatearticlesempty();
      props.fetcharticles(articles);
      setStateNull();
   }
   const setStateChange = (name, value) => {
      setState({ [name]: value })
   }
   const setStateNull = () => {
      setCode('');
      setLibelle('');
   }
   const fillForm = (line) => {
      setCode(line.code);
      setLibelle(line.libelle);
   }
   const setStateId = (id) => {
      setCode(id);
      setLibelle('');
   }
   return (
<div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> des articles
            </CardHeader>
            <BodyForm
               articles={props.articles}
               addarticle={props.addarticle}
               fetcharticles={props.fetcharticles}
               setstatearticlesempty={props.setstatearticlesempty}
               state={ { code, libelle } }
               setStateChange={setStateChange}
               setStateNull={setStateNull}
               setStateId={setStateId}
            />
            <CardBody>
               <DataTable
                  articles={props.articles}
                  state={ { code, libelle } }
                  fillForm={fillForm}
                  del={del}
               />
            </CardBody>
         </Card>
      </div>

   );
}
export default Articles;
