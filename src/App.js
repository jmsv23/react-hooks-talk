import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//pages
import StatelessPage from './pages/StatelessPage';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <Menu>
          <Menu.Item
            name='Stateless'
          >
            <Link to="/">Stateless</Link>
        </Menu.Item>

          <Menu.Item
            name='about'
          >
            <Link to="/about">About</Link>
        </Menu.Item>

          <Menu.Item
            name='users'
          >
            <Link to="/users">Users</Link>
        </Menu.Item>
        </Menu>
        <Container>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <StatelessPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}
