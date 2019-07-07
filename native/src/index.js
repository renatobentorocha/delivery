import './config/reactotronConfig';
import './config/StatusBarConfig';

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import * as NavigationService from '~/services/NavigationService';

import Routes from '~/routes';
import store from '~/store';

class App extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes
          ref={(nav) => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}

export default App;
