import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";import {
  Col,
  Row
} from 'reactstrap';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col className="left" xs="12" sm="3" md="3" lg="3" xl="3">
            <div className="share">
              <a target="_blank" href="https://www.facebook.com/readingardencommunity/">
                <FontAwesomeIcon icon={ faFacebook } />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={ faTwitter } />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={ faYoutube } />
              </a>
            </div>
          </Col>
          <Col className="right" xs="12" sm="9" md="9" lg="9" xl="9">
            <div className="pages">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
