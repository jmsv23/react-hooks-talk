import React, { useState } from 'react';
import { Button, Divider, Header } from 'semantic-ui-react';

const Counter = () => {
  const [counter, setCount] = useState(0);
  return (
    <div>
      <Header as='h1'>{counter}</Header>
      <Divider horizontal />
      <Button.Group>
        <Button
          negative
          onClick={() => { setCount(counter - 1) }}
        >-</Button>
        <Button.Or />
        <Button
          positive
          onClick={() => { setCount(counter + 1) }}
        >+</Button>
      </Button.Group>
    </div>
  );
}

export default Counter;
