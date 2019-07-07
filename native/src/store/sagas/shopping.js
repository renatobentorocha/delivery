import { call, put, select } from 'redux-saga/effects';

import api from '~/services/api';

import ShoppingActions from '~/store/ducks/shopping';

function itHasCategoryProductsRegistered(currentCategoryProducts, categoryId, productId) {
  const product = currentCategoryProducts.find(
    p => p.category_id === categoryId && p.id === productId,
  );

  return product;
}

function getNewCategoryProducts(categoryId, product) {
  const categoryProduct = {
    category_id: categoryId,
    ...product,
    quantity: 1,
  };

  return categoryProduct;
}

export function* addShopping(action) {
  try {
    const { categoryId, productId } = action.order;

    const { data: reponse } = yield call(api.get, `/category_products/${categoryId}`);

    const { products } = reponse;

    const data = products.find(p => p.id === productId);

    const { data: currentCategoryProducts } = yield select(state => state.shopping);

    if (!itHasCategoryProductsRegistered(currentCategoryProducts, categoryId, productId)) {
      const category = getNewCategoryProducts(categoryId, data);
      yield put(ShoppingActions.addShoppingSuccess(category));
    } else {
      const currentProducts = currentCategoryProducts.filter(cat => cat.category_id === categoryId);

      if (currentProducts && currentProducts.length > 0) {
        const productIndex = currentProducts.findIndex(p => p.id === data.id);

        let product = data;

        if (productIndex >= 0) {
          product = currentProducts[productIndex];
        }

        yield put(
          ShoppingActions.updateShoppingRequest({
            category_id: currentProducts.category_id,
            ...{ ...product, quantity: product.quantity ? Number(product.quantity) + 1 : 1 },
          }),
        );
      }
    }
  } catch (error) {
    yield put(ShoppingActions.addShoppingFailure(error));
  }
}

export function* updateShopping(action) {
  try {
    yield put(ShoppingActions.updateShoppingSuccess(action.data));
  } catch (error) {
    yield put(ShoppingActions.addShoppingFailure(error));
  }
}

export function* deleteShopping(action) {
  try {
    const { categoryId, productId } = action;

    const { data } = yield select(state => state.shopping);

    const products = data.filter(p => p.category_id !== categoryId && p.id !== productId);

    yield put(ShoppingActions.deleteShoppingSuccess(products));
  } catch (error) {
    yield put(ShoppingActions.addShoppingFailure(error));
  }
}
