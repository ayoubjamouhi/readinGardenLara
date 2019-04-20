/*import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody
} from 'reactstrap';
import BodyForm from './BodyForm';
import DataTable from './DataTable';

class Articles extends Component {
   constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.toggleFade = this.toggleFade.bind(this);
      this.setStateChange = this.setStateChange.bind(this);
      this.setStateNull = this.setStateNull.bind(this);
      this.fillForm = this.fillForm.bind(this);
      this.del = this.del.bind(this);
      this.state = {
         collapse: true,
         fadeIn: true,
         timeout: 300,
         code_journal: '',
         code_journal_intitule:'',
         contre_parties:'',
         contre_parties_intitule:'',
         type:'achats',
      };
   }

   componentDidMount() {
      // Fetch Journaux
      const journaux = [
         {
            code: 1,
            intitule: 'ANOUVEAU',
            contrepartie: '100000',
            contrepartie_intitule: 'cntrepartie',
            type: 'achats'
         },
         {
            code: 52,
            intitule: 'CAISSE',
            contrepartie: '100000',
            contrepartie_intitule: 'cntrepartie',
            type: 'ventes'
         }
      ];
      if(this.props.journaux.length === 0)
         this.props.fetchJournaux(journaux);

      // Fetch Contre Partie
      const contreparties = [
         {
            COMPLN: 10000000,
            INTITULE: 'CLASSE 1'
         },
         {
            COMPLN: 11210000,
            INTITULE: "PRIMES D'EMISSION"
         }
      ];
      if(this.props.contreparties.length === 0)
         this.props.fetchContreParties(contreparties);
   }

   toggle() {
      this.setState({ collapse: !this.state.collapse });
   }

   toggleFade() {
      this.setState((prevState) => { return { fadeIn: !prevState }});
   }
   setStateChange(name, value) {
      console.log(value);
      this.setState({ [name]: value })
   }
   setStateNull() {
      this.setState({
         code_journal: '',
         code_journal_intitule:'',
         contre_parties:'',
         contre_parties_intitule:'',
         type:'achats',
      })
   }
   fillForm(journal) {
      this.setState({
         code_journal: journal.code,
         code_journal_intitule: journal.intitule,
         contre_parties: journal.contrepartie,
         contre_parties_intitule: journal.contrepartie_intitule,
         type: journal.type,
      })
   }
   del(id) {
      console.log(id);
      const journaux = this.props.journaux;
      journaux.splice(id, 1);
      this.props.setStateJournauxEmpty();
      this.props.fetchJournaux(journaux);
      this.setStateNull();
   }
   render() {

      return (
      <div className="animated fadeIn">
         <Card>
            <CardHeader>
               <strong>Gestion</strong> des Journaux
            </CardHeader>
            <BodyForm
               journaux={this.props.journaux}
               contreparties={this.props.contreparties}
               addJournal={this.props.addJournal}
               journal={this.state}
               setStateChange={this.setStateChange}
               setStateNull={this.setStateNull}
            />
            <CardBody>
               <DataTable
                  journaux={this.props.journaux}
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
*/
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
   const [ description , setDescription] = useState('');
   const [ html , setHtml] = useState('');
   const [ IsFeatured , setIsFeatured] = useState(0);
   const state = [id, userid, imageid, credit, title, slug, description, html, IsFeatured];
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
      console.log(value);
      this.setState({ [name]: value })
   };
   const setStateNull = function() {
      this.setState({
         code_journal: '',
         code_journal_intitule:'',
         contre_parties:'',
         contre_parties_intitule:'',
         type:'achats',
      })
   };
   const fillForm = function(journal) {
      this.setState({
         code_journal: journal.code,
         code_journal_intitule: journal.intitule,
         contre_parties: journal.contrepartie,
         contre_parties_intitule: journal.contrepartie_intitule,
         type: journal.type,
      })
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
               <strong>Gestion</strong> des Journaux
            </CardHeader>
            <BodyForm
               articles={props.articles}
               addArticle={props.add_article}
               articles={state}
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
