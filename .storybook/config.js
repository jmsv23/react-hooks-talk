import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';
import 'semantic-ui-css/semantic.min.css';

addDecorator(addReadme);

addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.js$/), module);
