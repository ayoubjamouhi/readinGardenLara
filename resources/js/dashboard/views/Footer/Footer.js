import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <Row>
          <Col className="left" xs="12" sm="3" md="3" lg="3" xl="3">
            <div className="share">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a>
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </Col>
          <Col className="right" xs="12" sm="9" md="9" lg="9" xl="9">
            <div className="pages">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/contactus">Contact us</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
