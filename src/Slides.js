import React, {Component, PureComponent} from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import logo from './img/logo.png';
import b1 from './img/b1.jpg';

import mantequilla from './img/mantequilla.jpg';
import queso from './img/queso.jpg';
import ricotta from './img/ricotta.jpg';
import huevo from './img/huevo.jpg';
import res from './img/res.jpg';
import pollo from './img/pollo.jpg';
import chorizo from './img/chorizo.jpg';
import platano from './img/platano.jpg';
import aguacate from './img/aguacate.jpg';

import {Section} from 'react-fullpage';

import {
  Container, Row, Col, Tab, Nav, Form, FormControl, Button
} from 'react-bootstrap';

import {Preview} from './Cart.js';
import {Ingredient} from './Ingredients.js';

const ingredientList = {
  "mantequilla": {
    title: "Mantequilla",
    type: "lacteos",
    img: mantequilla,
    price: 1
  },

  "queso": {
    title: "Queso Rayado",
    type: "lacteos",
    img: queso,
    price: 1
  },

  "ricotta": {
    title: "Ricotta",
    type: "lacteos",
    img: ricotta,
    price: 3
  },

  "aguacate": {
    title: "Aguacate",
    type: "acomp",
    img: aguacate,
    price: 2
  },

  "platano": {
    title: "Platano",
    type: "acomp",
    img: platano,
    price: 3
  },

  "huevo": {
    title: "Huevo",
    type: "acomp",
    img: huevo,
    price: 2
  },

  "res": {
    title: "Res",
    type: "carnes",
    img: res,
    price: 4
  },

  "pollo": {
    title: "Pollo",
    type: "carnes",
    img: pollo,
    price: 3
  },

  "chorizo": {
    title: "Chorizo",
    type: "carnes",
    img: chorizo,
    price: 3
  }
};


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
              <h2 className="center sub">Las mismas baleadas, una nueva experiencia.</h2>
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
    return (
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
              <img src={b1} id="b1" alt="una baleada"></img>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

var param = "";

export class Slide3 extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: "Nueva Baleada",
      body: "- Tortilla y Frijoles",
      price: 10.00,
      param: "m"
    };

    this.clean = this.clean.bind(this);
    this.add = this.add.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(){
    var param2 = prompt("Ingrese parametro", "");
    param = this.state.param;

    this.setState({
      param: param2
    });
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
    var arr = [];

     Object.keys(ingredientList).forEach(function (key) {
      var val = ingredientList[key].title.toString();

      if (val.includes(param)){
        arr.push(ingredientList[key]);
      }
     });

     this.results = arr.map(item => <Col><Ingredient className="ingMax" key={item.title} title={item.title} price={item.price} img={item.img} add={this.add}/></Col>);

     return (
      <Section color="#FFFFFF">
        <Container className="slideContainer autoOver">
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
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">Buscar</Nav.Link>
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
                        <Container>
                          <Row>
                            <Col>
                              <Ingredient img={aguacate} title="Aguacate"
                              price={2} add={this.add}/>
                            </Col>
                            <Col>
                              <Ingredient img={platano} title="Platano"
                              price={3} add={this.add}/>
                            </Col>
                            <Col>
                              <Ingredient img={huevo} title="Huevo"
                              price={2} add={this.add}/>
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Container>
                          <Row>
                            <Col>
                              <Ingredient img={res} title="Res"
                              price={4} add={this.add}/>
                            </Col>
                            <Col>
                              <Ingredient img={pollo} title="Pollo"
                              price={3} add={this.add}/>
                            </Col>
                            <Col>
                              <Ingredient img={chorizo} title="Chorizo"
                              price={3} add={this.add}/>
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Container>
                          <Row>
                            <Col>
                              <Form inline>
                                <Button variant="success" onClick={this.handleSearch}>Buscar</Button>
                              </Form>
                            </Col>
                          </Row>
                          <Row>
                            {this.results}
                          </Row>
                        </Container>
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

export class Slide4 extends Component {
  render(){
    return (
      <Section color="#FFFFFF">
        <Container className="slideContainer">
          <Row>
            <Col>
              <h3 className="center sub">Mientras mas peligroso el barrio...</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="display-3 center title">Mas ricas las baleadas</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Chart/>
            </Col>
          </Row>
        </Container>
      </Section>
    );
  }
}

const data = [
  {
    name: 'Lomas del Guijarro', RC: 50, PM: 0, amt: 2400,
  },
  {
    name: 'La Hacienda', RC: 100, PM: 50, amt: 2210,
  },
  {
    name: 'Suyapa', RC: 150, PM: 100, amt: 2290,
  },
  {
    name: 'El Guanacaste', RC: 200, PM: 200, amt: 2000,
  },
  {
    name: 'La Kennedy', RC: 250, PM: 275, amt: 2181,
  },
  {
    name: '21 de Octubre', RC: 350, PM: 350, amt: 2500,
  },
  {
    name: 'El Hato', RC: 500, PM: 450, amt: 2100,
  },
];

export class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div className="centerWide">
        <LineChart
          width={1100}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="PM" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="RC" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
