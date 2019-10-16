import React, { Component } from 'react';
import { Button, Divider, Header } from 'semantic-ui-react';

export default class Crono extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      start: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.interval, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  interval = () => {
    const { start } = this.state;
    if (start) {
      this.setState(prevState => ({
        time: prevState.time + 1,
      }));
    }
  }

  render() {
    const { time, start } = this.state;
    return (
      <div>
        <Header as='h1'>{time}</Header>
        <Divider horizontal />
        <Button.Group>
          <Button
            negative
            onClick={() => { this.setState({ time: 0, }); }}
          >Reset</Button>
          <Button.Or />
          <Button
            positive
            onClick={() => { this.setState({ start: !start }); }}
          >{start ? 'Stop' : 'Start'}</Button>
        </Button.Group>
      </div>
    )
  }
}
