import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  loadProductRequest: null,
  loadProductSuccess: ['data'],
  loadProductFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const ProductTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCT_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCT_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.LOAD_PRODUCT_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
