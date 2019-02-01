import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// Components
import Header from '../../components/layouts/Header/Header';
import Footer from '../../components/layouts/Footer/Footer';
import Main from './Main/Main';
// Style
import './styles/main.scss';

class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         articles: []
      }
   }
   async componentDidMount () {
      try {
         const articles = await axios.get('/articles');
         if(articles.data.length >= 4)
         {
            this.setState({
               articles: articles.data
            });
         }
      } catch (err) {
         console.log(err);
      }
   }
   render() {
      return (
         <React.Fragment>
            { this.state.articles.length != 0 ?
               <React.Fragment>
                  <Header />
                  <Main articles={this.state.articles}/>
                  <Footer />
               </React.Fragment>
            : ''}
         </React.Fragment>
      );
   }
}
ReactDOM.render(<Home />, document.getElementById('root'));