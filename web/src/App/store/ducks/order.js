import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  loadOrderRequest: null,
  loadOrderSuccess: ['data'],
  OrderFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const OrderTypes = Types;
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
  [Types.LOAD_ORDER_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_ORDER_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),

  [Types.ORDER_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
