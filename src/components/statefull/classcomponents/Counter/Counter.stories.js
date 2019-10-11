import React from 'react';
import { storiesOf } from '@storybook/react';
import Counter from './Counter';
import CounterReadme from './CounterReadme.md';


storiesOf('Statefull/class', module)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: CounterReadme,
    },
  })
  .add('Counter', () => (
    <Counter />
  ));
