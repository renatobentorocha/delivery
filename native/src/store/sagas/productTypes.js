import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import ProductTypesActions from '~/store/ducks/productTypes';

export function* loadProductTypes(action) {
  try {
    const { data } = yield call(api.get, `/app/product/${action.productId}/type`);

    yield put(ProductTypesActions.loadProductTypesSuccess(data));
  } catch (error) {
    yield put(ProductTypesActions.loadProductTypesFailure(error));
  }
}
