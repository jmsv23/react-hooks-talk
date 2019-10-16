import React, { useEffect, useReducer } from 'react';
import { Button, Divider, Header } from 'semantic-ui-react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        start: state.start,
        time: (state.start ? state.time + 1 : state.time),
      };
    case 'reset':
      return { time: 0 };
    case 'start':
      return {
        start: !state.start,
        time: state.time
      };
    default:
      throw new Error();
  }
}

const Crono = () => {
  const [state, dispatch] = useReducer(reducer, { time: 0, start: false, });

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'increment' });
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  },[]);

  return (
    <div>
      <Header as='h1'>{state.time}</Header>
      <Divider horizontal />
      <Button.Group>
        <Button
          negative
          onClick={() => { dispatch({ type: 'reset' }); }}
        >Reset</Button>
        <Button.Or />
        <Button
          positive
          onClick={() => { dispatch({ type: 'start' }) }}
        >{state.start ? 'Stop' : 'Start'}</Button>
      </Button.Group>
    </div>
  );
}

export default Crono;
