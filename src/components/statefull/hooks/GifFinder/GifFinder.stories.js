import React from 'react';
import { storiesOf } from '@storybook/react';
import GifFinder from './GifFinder';
import GifFinderReadme from './GifFinderReadme.md';


storiesOf('Statefull/hooks', module)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: GifFinderReadme,
    },
  })
  .add('GifFinder', () => (
    <GifFinder />
  ));
