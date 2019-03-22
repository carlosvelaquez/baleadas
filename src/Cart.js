import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import b2 from './img/b2.jpg';
import './Cart.css';

export class Preview extends Component {
    constructor(){
        super();
        this.sendItem = this.sendItem.bind(this);
    }

    sendItem(){
        if (typeof this.props.send === 'function') {
            this.props.send(this.props.title, this.props.body, this.props.price);
        }

        this.props.clean();
    }

    render(){
        return(
            <Card>
                <Card.Img variant="top" src={b2} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.body}
                    </Card.Text>
                    <Card.Text>
                    Total: L.{this.props.price}
                    </Card.Text>
                    <Button variant="success" onClick={this.sendItem} size="sm">Añadir a la Bandeja</Button>
                    <Button variant="danger"  onClick={this.props.clean} size="sm">Limpiar</Button>
                </Card.Body>
                
            </Card>
        );
    }
}

export class Item extends Component {

    handleDelete(){
        if (typeof this.props.del === 'function') {
            this.props.del(this.props.key - 1);
        }
    }

    render(){
        return(
            <Card>
                <Card.Img variant="top" src={b2} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.body}
                    </Card.Text>
                    <Button variant="danger" size="sm" onClick={this.handleDelete.bind(this)}>Eliminar</Button>
                </Card.Body>
                
            </Card>
        );
    }
}

export class Cart extends Component {
    constructor(props){
        super(props);

        this.state = {
            visible: props.shown
        };

        this.toggle = this.toggle.bind(this);
        this.handleBuy = this.handleBuy.bind(this);
    }

    componentWillReceiveProps(props){
        if (props.shown !== this.state.visible)
            this.toggle();

        if (props.user) {
            props.db.collection("carritos").doc(props.user.uid).set({
                cartItems: props.cartItems
            }).then(function () {
                console.log("Cart updated");
            });
        }
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleBuy() {
        if (this.props.cartContents.length <= 0) {
            alert("El carrito está vacío, debes añadir al menos una baleada.");
        }else{
            this.props.db.collection("ordenes").add({user: this.props.user.uid, cartItems: this.props.cartItems}).then(function () {
                alert("Orden procesada exitosamente");
            }).catch(function (error) {
                console.error("Error añadiendo orden: ", error);
            });

            this.props.clear();
        }        
    }

    render(){
       if (this.props.user) {
            return(
            <div id="cartwrapper" className={this.state.visible ? "shown" : "hidden"}>
                <div id="cartflap">
                    <button id="showbutton" onClick={this.toggle}><i className="fa fa-shopping-cart" aria-hidden="true"/></button>
                </div>
                <div id="cart">
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <h5>¡Hola {this.props.user.displayName}!</h5>
                            </Col>
                            <Col sm={6}>
                                <Button variant="danger" onClick={this.props.signOut}>Cerrar Sesión</Button>
                            </Col>
                        </Row>
                    </Container>

                    <hr/>
                    
                    <h1>Tu Bandeja de Compras</h1>
                    <hr/>
                    <div id="itemContainer">
                        {this.props.cartContents.map(item => <div className="itemWrap"> {item} </div>)}
                    </div>
                    
                    <div id="buyContainer">
                        <Button id="buyButton" variant="success" onClick={this.handleBuy}>Realizar Orden</Button> 
                    </div>

                </div>
            </div>
        );
       }else{
           return(
               <div id="cartwrapper" className={this.state.visible ? "shown" : "hidden"}>
                <div id="cartflap">
                    <button id="showbutton" onClick={this.toggle}><i className="fa fa-shopping-cart" aria-hidden="true"/></button>
                </div>
                <div id="cart">
                    <h2>Necesitas iniciar sesión para hacer una orden</h2>
                    <div id="firebaseui-auth-container"></div>
                    <div id="sign-in-status"></div>
                    <div id="account-details"></div>
                </div>
                </div>
           );
       }
    }
}

