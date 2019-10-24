import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// Components
import Header from '../../components/layouts/Header/Header';
import Footer from '../../components/layouts/Footer/Footer';
import Main from './Main/Main';
const LazyMain = React.lazy( () => import('./Main/Main'));
// Style
import './styles/main.scss';

class Home extends React.Component {
   constructor() {
      super();
      this.state = {
         article: []
      }
   }
   async componentDidMount () {
      const slug = window.location.href.split('/')[4];
      try {
         const article = await axios.get(`/article/get/${slug}`);
         if(article.data.length != 0)
         {
            this.setState({
               article: article.data[0]
            });
         }
      } catch (err) {
         console.log(err);
      }
   }
   render() {
      return (
         <React.Fragment>
            { this.state.article.length != 0 ?
               <React.Fragment>
                  <Header />
                  <Suspense fallback={<div>Loading ...</div>}>
                     <LazyMain article={this.state.article}/>
                  </Suspense>
                  { /* <Main article={this.state.article}/> */}
                  <Footer />
               </React.Fragment>
            : '' }
         </React.Fragment>
      );
   }
}
ReactDOM.render(<Home />, document.getElementById('root'));