import React from 'react';
import { storiesOf } from '@storybook/react';
import GifFinder from './GifFinder';
import GifFinderReadme from './GifFinderReadme.md';


storiesOf('Statefull/class', module)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: GifFinderReadme,
    },
  })
  .add('GifFinder', () => (
    <GifFinder />
  ));
