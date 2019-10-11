import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Avatar from './Avatar';
import AvatarReadme from './README.md';


storiesOf('Stateless', module)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: AvatarReadme,
    },
  })
  .add('Avatar', () => (
    <Avatar img={text('Image', 'http://aquaroecole.com/assets/images/avatar.png')} />
  ));
