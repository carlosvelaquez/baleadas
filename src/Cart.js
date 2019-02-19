import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

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
            visible: this.props.shown
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        return(
            <div id="cartwrapper" className={this.state.visible ? "shown" : "hidden"}>
                <div id="cartflap">
                    <button id="showbutton" onClick={this.toggle}><i class="fa fa-shopping-cart" aria-hidden="true"/></button>
                </div>
                <div id="cart">
                    <h1>Bandeja de Compras</h1>
                    <hr/>
                    {this.props.cartContents.map(item => <div className="itemWrap"> {item} </div>)}
                    <div id="buyContainer">
                        <Button id="buyButton" variant="success">Realizar Orden</Button> 
                    </div>

                </div>
            </div>
        );
    }
}

