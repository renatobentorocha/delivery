import './config/reactotron';
import './config/env';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from './routes/history';

import GlobalStyle from './styles/global';

import Signin from './pages/signin';

import Routes from './routes';
import { store } from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/app" component={Routes} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
