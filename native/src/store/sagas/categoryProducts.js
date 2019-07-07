import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import CategoryProductsActions from '~/store/ducks/categoryProducts';

export function* loadCategoryProducts(action) {
  try {
    const { data } = yield call(api.get, `/category_products/${action.category}`);

    yield put(CategoryProductsActions.loadCategoryProductsSuccess(data));
  } catch (error) {
    yield put(CategoryProductsActions.loadCategoryProductsFailure(error));
  }
}
