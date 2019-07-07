import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import OrderItemActions from '~/store/ducks/orderItem';

const createOrderItem = payload => api.post(`/app/usuario/${payload.userId}/pedido/${payload.orderId}/item`, payload.data);

export function* addOrderItem(action) {
  try {
    const { data } = yield call(createOrderItem, {
      userId: action.userId,
      orderId: action.orderId,
      data: action.data,
    });

    yield put(OrderItemActions.addOrderItemSuccess(data));
  } catch (error) {
    yield put(OrderItemActions.OrderItemFailure(error));
  }
}
