import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  loadCategoryProductsRequest: ['category'],
  loadCategoryProductsSuccess: ['data'],
  loadCategoryProductsFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const CategoryProductsTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  category: null,
  data: {},
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORY_PRODUCTS_REQUEST]: (state, { category }) => state.merge({ category, loading: true }),
  [Types.LOAD_CATEGORY_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.LOAD_CATEGORY_PRODUCTS_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
