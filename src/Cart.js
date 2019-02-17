import React, { Component } from 'react';
import './Cart.css';

import {
  Button
} from 'react-bootstrap';

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
        return(
            <div id="cartwrapper" className={this.state.visible ? "shown" : "hidden"}>
                <div id="cartflap">
                    <Button id="showbutton" onClick={this.toggle}>C</Button>
                </div>
                <div id="cart">
                    <h1>Bandeja de Compras</h1>
                    <hr/>
                </div>
            </div>
        );
    }
}