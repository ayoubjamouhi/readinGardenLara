import React from 'react';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook } from "@fortawesome/free-brands-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
///import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Welcome from '../../../components/layouts/Welcome/Welcome';

import {
   Container
} from 'reactstrap';
import Featured from './Featured';
import FeaturedMembers from './FeaturedMembers';
// Style
import '../styles/main.scss';
class Main extends React.Component {

   render() {
      return (
         <main>
            <Container fluid>
               <Featured articles={this.props.articles} />
               <Welcome />
               <FeaturedMembers articles={this.props.articles} />
            </Container>
         </main>
      );

   }
}

export default Main;