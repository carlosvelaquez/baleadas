import React, {Component} from 'react';

import logo from './img/logo.png';
import b1 from './img/b1.jpg';

import mantequilla from './img/mantequilla.jpg';
import queso from './img/queso.jpg';
import ricotta from './img/ricotta.jpg';
import video1 from './vid/1.mp4';

import posed from 'react-pose';
import {Section} from 'react-fullpage';

import {
  Container, Row, Col, Tab, Nav
} from 'react-bootstrap';

import {Preview} from './Cart.js';
import {Ingredient} from './Ingredients.js';

const Fader = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export class Slide1 extends Component {
  render(){
    return (
      <Section color="#FFFFFF" id="mainSlide">
        < div id = "welcome" >
        <Container>
        
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
        </div>
      </Section>
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
                <h3>Amor a primera mordida</h3>
                <h1 className="display-4 title">Conoce a la baleada</h1>

                <p>
                  La baleada es uno de los platos más representativos de la gastronomía hondureña originada en La Ceiba, norte de Honduras.
                </p>

                <p>
                    Normalmente, la receta básica lleva frijoles cocidos machacados o licuados. Esta variedad de frijoles (Phaseolus vulgaris) es originaria de mesoamérica, donde ha sido cultivada por más de diez milenios. Posteriormente se les adiciona queso molido y crema agria (mantequilla) dentro de una tortilla de harina doblada.
                </p>

                <p>
                  Cuenta la leyenda que había una señora que acostumbraba a vender tortillas de harina rellenas de frijoles con queso en polvo. Un día ocurrió un tirotero en la zona y una bala impactó a la mujer. La herida no fue de gravedad y la mujer a los días se recuperó y volvió a la venta de su producto. Desde entonces los trabajadores comenzaron a decir vamos a comer donde“la baleada”.
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

export class Slide3 extends Component {
  constructor(){
    super();
    this.state = {
      title: "Nueva Baleada",
      body: "- Tortilla y Frijoles",
      price: 10.00
    };

    this.clean = this.clean.bind(this);
    this.add = this.add.bind(this);
  }

  clean(){
    this.setState({
      title: "Nueva Baleada",
        body: "- Tortilla y Frijoles",
        price: 10.00
    });
  }

  add(name, price){
    this.setState({
      body: this.state.body + "\n- " + name,
      price: this.state.price + price
    });
  }

   render(){
     return (
      <Section color="#FFFFFF">
        <Container className="slideContainer">
          <Row>
            <Col>
            <h1 className="display-4 center title">¡Configura tu Baleada!</h1>
            </Col>
          </Row>
          <br/>

          <Row className="sadPad">
            <Col sm={8}>
              <div id="tabswrapper">
              <Tab.Container defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Lacteos</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Acompañantes</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Carnes</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9} className="tab">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Container>
                          <Row>
                            <Col>
                              <Ingredient img={mantequilla} title="Mantequilla"
                              price={1} add={this.add}/>
                            </Col>
                            <Col>
                              <Ingredient img={queso} title="Queso Rayado"
                              price={1} add={this.add}/>
                            </Col>
                            <Col>
                              <Ingredient img={ricotta} title="Ricotta"
                              price={3} add={this.add}/>
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h2>Lorem pipsum 2</h2>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <h2>Lorem pipsum 3</h2>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
              </div>
            </Col>
            <Col id="config">
              <Preview title={this.state.title} body={this.state.body} price={this.state.price} send={this.props.send} clean={this.clean}/>
            </Col>
          </Row>
        </Container>
      </Section>
     );
   }
}