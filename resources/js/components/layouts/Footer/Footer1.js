import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';
import './footer.scss';
class Footer extends Component {
  render() {
    return (
      <footer>
         <section>
            <p>
               Copyright 2019 JFNADEV
            </p>
         </section>
      </footer>
    );
  }
}

export default Footer;
