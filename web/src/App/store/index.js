import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';

// import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

import history from '../routes/history';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [routerMiddleware(history)];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleWare = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleWare);

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const rootReducer = persistCombineReducers(persistConfig, reducers);

// export const store = createStore(connectRouter(history)(rootReducer), composer);

export const store = createStore(connectRouter(history)(reducers), composer);

// export const persistor = persistStore(store);

sagaMiddleWare.run(sagas);
