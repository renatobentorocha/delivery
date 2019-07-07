import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import CartActions from '~/store/ducks/cart';

const createItem = payload => api.post(`/app/usuario/${payload.user_id}/carrinho`, payload);
const removeItem = payload => api.delete(`/app/usuario/${payload.userId}/carrinho/item/${payload.itemId}`);
const removeCart = payload => api.delete(`/app/usuario/${payload}/carrinho`);

export function* loadCart(action) {
  try {
    const { data } = yield call(api.get, `/app/usuario/${action.user_id}/carrinho`);

    yield put(CartActions.loadCartSuccess(data));
  } catch (error) {
    yield put(CartActions.cartFailure(error));
  }
}

export function* addItemToCart(action) {
  try {
    const { data } = yield call(createItem, action.item);

    yield put(CartActions.addItemCartSuccess(data));
  } catch (error) {
    yield put(CartActions.cartFailure(error));
  }
}

export function* delItemCart(action) {
  try {
    yield call(removeItem, { userId: action.user_id, itemId: action.itemId });

    yield put(CartActions.delItemCartSuccess(action.itemId));
  } catch (error) {
    yield put(CartActions.cartFailure(error));
  }
}

export function* delCart(action) {
  try {
    yield call(removeCart, action.user_id);

    yield put(CartActions.delCartSuccess());
  } catch (error) {
    yield put(CartActions.cartFailure(error));
  }
}
