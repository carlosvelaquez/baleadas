import React, {Component} from 'react';

import {
  Card, Button
} from 'react-bootstrap';

export class Ingredient extends Component {
    constructor(){
        super();
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(){
        if (typeof this.props.add === 'function') {
            this.props.add(this.props.title, this.props.price);
        }
    }

    render(){
        return(
            <Card>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body className="center">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.body}
                    </Card.Text>
                    <Button size="sm" onClick={this.handleAdd}>L. {this.props.price}</Button>
                </Card.Body>
            </Card>
        );
    }
}