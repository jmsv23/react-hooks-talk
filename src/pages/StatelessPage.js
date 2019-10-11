import React from 'react';
import { Divider, Header } from 'semantic-ui-react';
import Avatar from '../components/stateless/Avatar';

const StatelessPage = () => (
  <div>
    <Divider horizontal>
      <Header as='h2'>
        Avatar Example
      </Header>
    </Divider>
    <Avatar img="http://aquaroecole.com/assets/images/avatar.png" />
  </div>
);

export default StatelessPage;
