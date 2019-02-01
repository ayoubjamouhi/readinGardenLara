import React, { Component } from 'react';

import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
  Navbar,
  Collapse,
} from 'reactstrap';

import ReactSVG from 'react-svg'
import './header.scss'
import Logo from '../../Logo/Logo';
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
        <Navbar  style={ {width:'100%'} } light expand="md" >
          <a href="/" className="navbar-brand">
            <img src="/images/logo.png" alt="readinGarden" style={ {width:'100%'} }/>
          </a>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <a href="/blog" className="nav-link">Blog</a>
              </NavItem>
              <NavItem>
                <a href="/contact" className="nav-link">Contact us</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}


export default Header;
