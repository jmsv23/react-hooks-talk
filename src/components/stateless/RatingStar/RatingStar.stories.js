import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import RatingStar from './RatingStar';
import RatingStarReadme from './RatingReadme.md';


storiesOf('Stateless', module)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: RatingStarReadme,
    },
  })
  .add('Rating', () => (
    <RatingStar
      rating={number('Rating', 1)}
      maxRating={number('Max Rating', 5)}
    />
  ));
