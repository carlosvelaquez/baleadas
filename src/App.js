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

import {Slide1, Slide2} from './Slides.js';


class App extends Component {
  render() {
     let options = {
            sectionClassName: 'section',
              anchors: ['inicio', 'ciencia', 'sectionThree'],
              scrollBar: false,
              navigation: true,
              verticalAlign: false,
              arrowNavigation: true
     };

    return (
    <div>
      <Navbar bg="transparent" sticky="top" variant="light" id="navbar">
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
          <Nav className="justify-content-end">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#ciencia">Ciencia</Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      

        <SectionsContainer className="SectionsContainer" {...options}>
          <Slide1/>
          <Slide2/>
          <Section color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
