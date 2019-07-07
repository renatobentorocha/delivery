import React, { Fragment } from 'react';
import { Switch } from 'react-router-dom';

import Header from '../components/Header';
import Orders from '../pages/orders';
import { Container } from '../styles/content';

import { isAuthenticated } from '../services/auth';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Fragment>
    {isAuthenticated() ? <Header /> : null}
    <Container>
      <Switch>
        <PrivateRoute path="/app" component={Orders} />
      </Switch>
    </Container>
  </Fragment>
);

export default Routes;
