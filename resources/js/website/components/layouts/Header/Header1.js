import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"

import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
  Container
} from 'reactstrap';

import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar light expand="md">
            <Container>
              <a href="/" className="navbar-brand">readinGarden</a>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                      <a href="http://www.facebook.com" className="nav-link"><FontAwesomeIcon icon={faFacebook} /></a>
                  </NavItem>
                  <NavItem>
                    <a href="http://www.twitter.com" className="nav-link"><FontAwesomeIcon icon={faTwitter} /></a>
                  </NavItem>
                  <NavItem>
                    <a href="http://www.youtube.com" className="nav-link"><FontAwesomeIcon icon={faYoutube} /></a>
                  </NavItem>
                  <NavItem>
                    <a href="/privacy-policy" className="nav-link">
                      Privacy Policy
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="/temers-of-use" className="nav-link">
                      Terms of use
                    </a>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
        </Navbar>
      </header>
    );
  }
}


export default Header;
