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
   componentDidMount () {

   }
   render() {
      return (
         <React.Fragment>
            <Header />
            <Main />
            <Footer />
         </React.Fragment>
      );
   }
}
ReactDOM.render(<Home />, document.getElementById('root'));