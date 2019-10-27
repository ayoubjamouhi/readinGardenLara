import React, { useState, useEffect } from 'react';
import {
   Card,
   CardHeader,
   CardBody
 } from 'reactstrap';

 import axios from 'axios';

 import BodyForm from './BodyForm';
 import DataTable from './DataTable';

function Articles(props) {
   const [ id , setId] = useState('');
   const [ userid , setUserid] = useState('');
   const [ imageid , setImageid] = useState('');
   const [ credit , setCredit] = useState('');
   const [ title , setTitle] = useState('');
   const [ slug , setSlug] = useState('');
   const [ categorie , setCategorie] = useState('');
   const [ description , setDescription] = useState('');
   const [ html , setHtml] = useState('');
   const [ is_featured , setIsFeatured] = useState(0);
   const state = { id, userid, imageid, credit, title, slug, categorie, description, html, is_featured };
   useEffect(() => {
      const fetchArticles = async () => {
         try {
            const {data} = await axios.get('/articles');
            if(props.articles.length === 0)
               props.fetch_articles(data);
         } catch (error) {
            console.log(error);
         }
      }
      fetchArticles();
   });
  const setStateChange = function(name, value) {
      this.setState({ [name]: value })
   };
   const setStateNull = function() {
      setCredit('');
      setTitle('');
      setSlug('');
      setCategorie('');
      setDescription('');
      setIsFeatured('');
      setHtml('');
   };
   const fillForm = function(article) {
      setCredit(article.credit);
      setTitle(article.title);
      setSlug(article.slug);
      setCategorie(article.categorie);
      setDescription(article.description);
      setIsFeatured(article.is_featured);
      setHtml(article.html);
   };
   const del = function(id) {
      console.log(id);
      const journaux = this.props.journaux;
      journaux.splice(id, 1);
      this.props.setStateJournauxEmpty();
      this.props.fetchJournaux(journaux);
      this.setStateNull();
   };
    return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> des Articles
            </CardHeader>
            <BodyForm
               articles={props.articles}
               addArticle={props.add_article}
               article={state}
               setStateChange={setStateChange}
               setStateNull={setStateNull}
            />
            <CardBody>
               <DataTable
                  articles={props.articles}
                  article={state}
                  fillForm={fillForm}
                  del={del}
               />
            </CardBody>
         </Card>
      </div>
   );
}
export default Articles;
