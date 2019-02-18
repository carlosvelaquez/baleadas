import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

import b2 from './img/b2.jpg';
import './Cart.css';

export class Item extends Component {
    render(){
        return(
            <Card>
                <Card.Img variant="top" src={b2} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.body}
                    </Card.Text>
                    <Button variant="danger">Eliminar</Button>
                </Card.Body>
                
            </Card>
        );
    }
}

export class Cart extends Component {
    constructor(){
        super();
        this.state = {visible: false};

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        const card = <Item title="Baleada" body="frijoles"/> ;
        return(
            <div id="cartwrapper" className={this.state.visible ? "shown" : "hidden"}>
                <div id="cartflap">
                    <button id="showbutton" onClick={this.toggle}>C</button>
                </div>
                <div id="cart">
                    <h1>Bandeja de Compras</h1>
                    <hr/>
                    {card}
                </div>
            </div>
        );
    }
}

