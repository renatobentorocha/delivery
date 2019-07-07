/* eslint-disable no-plusplus */
import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import OrderActions from '../ducks/order';

export function* loadOrder() {
  try {
    const { data } = yield call(api.get, '/app/order');

    yield put(OrderActions.loadOrderSuccess(data));
  } catch (error) {
    yield put(OrderActions.OrderFailure(error));
  }
}
