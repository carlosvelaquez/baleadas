import React, {Component} from 'react';

import {
  Card, Button
} from 'react-bootstrap';

export class Ingredient extends Component {
    render(){
        return(
            <Card>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body className="center">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.body}
                    </Card.Text>
                    <Button size="sm">L. {this.props.price}</Button>
                </Card.Body>
            </Card>
        );
    }
}