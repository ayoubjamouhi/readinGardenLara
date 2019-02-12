import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
} from 'reactstrap';

import './Styles/Header.css'

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
      <React.Fragment>
        <Navbar  light expand="md">
          <Link to="/" className="navbar-brand">readinGarden</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <Link to="/blog" className="nav-link">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="nav-link">Contact us</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}


export default Header;
