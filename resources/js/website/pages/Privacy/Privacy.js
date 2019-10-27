import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './Main/Main';
// Style
import './styles/main.scss';

class Home extends React.Component {
   render() {
      return (
            <Main />
      );
   }
}
ReactDOM.render(<Home />, document.getElementById('root'));