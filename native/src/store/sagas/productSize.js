import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import ProductSizeActions from '~/store/ducks/productSize';

export function* loadProductSize(action) {
  try {
    const { data } = yield call(api.get, `/app/product_type/${action.productTypeId}/size`);

    yield put(ProductSizeActions.loadProductSizeSuccess(data));
  } catch (error) {
    yield put(ProductSizeActions.loadProductSizeFailure(error));
  }
}
