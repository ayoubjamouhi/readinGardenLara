import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Main from './Main/Main';
// Style
import './styles/main.scss';

class Home extends React.Component {
   constructor() {
      super();
   }
   async componentDidMount () {

   }
   render() {
      return (
         <Main />
      );
   }
}
ReactDOM.render(<Home />, document.getElementById('root'));