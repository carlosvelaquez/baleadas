import React, { Component } from 'react';
import posed from 'react-pose';

import {
  SectionsContainer,
  Section
} from 'react-fullpage';

import {
  Container, Row, Col, Nav, Navbar
} from 'react-bootstrap';

import logo from './img/logo.png';
import './App.css';

import {Slide1, Slide2, Slide3} from './Slides.js';
import {Cart} from './Cart.js';


class App extends Component {
  render() {
     let options = {
            sectionClassName: 'section',
              anchors: ['inicio', 'historia', 'pedir'],
              scrollBar: false,
              navigation: true,
              verticalAlign: false,
              arrowNavigation: true
     };

    return (
    <div>
      <Navbar bg="transparent" sticky="top" variant="dark" id="navbar">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        Baleadas Conchita
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end" id="nav">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#historia">La Baleada</Nav.Link>
            <Nav.Link href="#pedir">Hacer una Orden</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Cart/>
        <SectionsContainer className="SectionsContainer" {...options}>
          <Slide1/>
          <Slide2/>
          <Slide3/>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
