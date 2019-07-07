import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';
import { reducer as order } from './order';
import { reducer as signin } from './signin';

import history from '../../routes/history';

export default combineReducers({ order, signin, router: connectRouter(history) });
