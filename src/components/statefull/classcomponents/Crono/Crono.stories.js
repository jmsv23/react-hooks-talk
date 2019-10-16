import React from 'react';
import { storiesOf } from '@storybook/react';
import Crono from './Crono';
import CounterReadme from './CronoReadme.md';


storiesOf('Statefull/class', module)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: CounterReadme,
    },
  })
  .add('Crono', () => (
    <Crono />
  ));
