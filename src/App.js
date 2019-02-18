import React, { Component } from 'react';

import {
  SectionsContainer,
} from 'react-fullpage';

import {
  Nav, Navbar
} from 'react-bootstrap';

import logo from './img/logo.png';
import './App.css';

import {Slide1, Slide2, Slide3, Slide4} from './Slides.js';
import {Cart, Item} from './Cart.js';

let counter = 1;

class App extends Component {
  constructor(){
    super();
    this.sendItem = this.sendItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      cartContents: [],
      cartDisplay: false
    }
  }

  sendItem(title, body, price){
    let arr = this.state.cartContents;
    let name = "Baleada " + counter;
    arr.push(<Item title={name} body={body} price={price} key={counter} del={this.deleteItem}/>);
    this.setState({cartContents: arr});

    alert("Baleada añadida con exito.");

    this.setState({
      cartDisplay: true
    });

    counter ++;
  }

  deleteItem(index){
    var nContents = this.state.cartContents;
    nContents.shift(index, 1);

    this.setState({
      cartContents: nContents
    });
  }

  render() {
     let options = {
            sectionClassName: 'section',
              anchors: ['inicio', 'historia', 'estudio', 'pedir'],
              scrollBar: false,
              navigation: true,
              verticalAlign: false,
              arrowNavigation: true
     };

    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Navbar.Brand href="#home">
        <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        Baleadas Conchita</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#historia">La Baleada</Nav.Link>
            <Nav.Link href="#estudio">Estudios</Nav.Link>
            <Nav.Link href="#pedir">Hacer una Orden</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Cart cartContents={this.state.cartContents} shown={this.state.cartDisplay}/>
        <SectionsContainer className="SectionsContainer" {...options}>
          <Slide1/>
          <Slide2/>
          <Slide4/>
          <Slide3 send={this.sendItem}/>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
