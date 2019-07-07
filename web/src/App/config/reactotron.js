import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure() // we can use plugins here -- more on this later
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect(); // let's connect!

  tron.clear();

  console.tron = tron;
}
