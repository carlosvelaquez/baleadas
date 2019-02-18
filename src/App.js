import React, { Component } from 'react';
import posed from 'react-pose';

import {
  SectionsContainer,
  Section
} from 'react-fullpage';

import {
  Container, Row, Col, Nav, Navbar, Button
} from 'react-bootstrap';

import logo from './img/logo.png';
import './App.css';

import {Slide1, Slide2, Slide3} from './Slides.js';
import {Cart, Item} from './Cart.js';

let counter = 1;

class App extends Component {
  constructor(){
    super();
    this.sendItem = this.sendItem.bind(this);
    this.test = this.test.bind(this);
    this.state = {
      cartContents: []
    }
  }

  sendItem(title, body, price){
    let arr = this.state.cartContents;
    let name = "Baleada " + counter;
    arr.push(<Item title={name} body={body} price={price} key={counter}/>);
    this.setState({cartContents: arr});
    counter ++;
  }

  test(){
    this.sendItem("firts", "1", 123);
  }

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
      <Navbar sticky="top" variant="dark" id="navbar">
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
      <Cart cartContents={this.state.cartContents}/>
        <SectionsContainer className="SectionsContainer" {...options}>
          <Slide1/>
          <Slide2/>
          <Slide3 send={this.sendItem}/>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
