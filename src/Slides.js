import React, {Component} from 'react';

import logo from './img/logo.png';
import b1 from './img/b1.jpg';
import posed from 'react-pose';

import {Section} from 'react-fullpage';

import {
  Container, Row, Col, Nav, Navbar
} from 'react-bootstrap';

const Fader = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export class Slide1 extends Component {
  constructor(){
    super();
    this.state = {isVisible: false};
  }

  componentDidMount(){
    this.setState({isVisible: true});
  }

  render(){
    const visibility = this.state.isVisible;

    return (
      <Fader className="box" pose={visibility ? 'visible' : 'hidden'}>
      <Section color="#FFFFFF" >
        <Container className="slideContainer" id="mainSlide">
          <Row>
            <Col>
              <img src={logo} id="logo" alt="logo" />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="display-2 center">Baleadas Conchita</h1>
              <h2 className="center">Las mismas baleadas, una nueva experiencia.</h2>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fader>
    );
  }
}

export class Slide2 extends Component {
  constructor(){
    super();
    this.state = {isVisible: false};
  }

  componentDidMount(){
    this.setState({isVisible: true});
  }

  render(){
    const visibility = this.state.isVisible;

    return (
      <Fader className="box" pose={visibility ? 'visible' : 'hidden'}>
      <Section color="#FFFFFF" >
        <Container className="slideContainer nomargin notop">
          <Row className="fullHeight">
            <Col className="slideContentNoTop fullHeight">
                <h3>La ciencia detrás de</h3>
                <h1 className="display-4">Una buena baleada</h1>

                <p>
                    Lorem ipsum;
                </p>
            </Col>
            <Col className="fullHeight">
              <img src={b1} id="b1"></img>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fader>
    );
  }
}