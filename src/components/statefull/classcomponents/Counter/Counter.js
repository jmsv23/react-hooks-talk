import React, { Component } from 'react';
import { Button, Divider, Header } from 'semantic-ui-react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  render() {
    const { counter } = this.state;
    return (
      <div>
        <Header as='h1'>{counter}</Header> 
        <Divider horizontal />
        <Button.Group>
          <Button
            negative
            onClick={() => { this.setState({ counter: counter -1, }) }}
          >-</Button>
          <Button.Or />
          <Button
            positive
            onClick={() => { this.setState({ counter: counter + 1, }) }}
          >+</Button>
        </Button.Group>
      </div>
    );
  }
}
