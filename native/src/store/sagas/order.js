/* eslint-disable no-plusplus */
import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { getToken } from '~/services/auth';

import OrderActions from '../ducks/order';
import OrderItemActions from '../ducks/orderItem';
import CartActions from '../ducks/cart';

const createOrder = payload => api.post(`/app/usuario/${payload.userId}/order`, payload.data);

export function* loadOrder() {
  try {
    const user = yield call(getToken);

    const { data } = yield call(api.get, `/app/user/${user.id}/order`);

    yield put(OrderActions.loadOrderSuccess(data));
  } catch (error) {
    yield put(OrderActions.OrderFailure(error));
  }
}

export function* addOrder(action) {
  try {
    const user = yield call(getToken);

    const { data } = yield call(createOrder, {
      userId: user.id,
      data: action.data,
    });

    const { items } = action.data;

    for (let index = 0; index < items.length; index++) {
      const item = items[index];

      yield put(OrderItemActions.addOrderItemRequest(user.id, data.id, item));
    }

    yield put(CartActions.delCartRequest(user.id));

    yield put(CartActions.loadCartRequest(user.id));

    yield put(OrderItemActions.loadOrderRequest(user.id));

    yield put(OrderActions.loadOrderSuccess(data));
  } catch (error) {
    yield put(OrderActions.OrderFailure(error));
  }
}
