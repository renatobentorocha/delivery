/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const reactotron = Reactotron.configure({ host: '10.0.3.2', port: 9090 }) // controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  reactotron.clear();
  console.tron = reactotron;
}
