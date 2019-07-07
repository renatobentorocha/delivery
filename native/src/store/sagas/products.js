import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import ProductsActions from '~/store/ducks/products';

export function* loadProducts() {
  try {
    const { data } = yield call(api.get, '/app/product');

    yield put(ProductsActions.loadProductSuccess(data));
  } catch (error) {
    yield put(ProductsActions.loadProductFailure(error));
  }
}
