import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  addOrderItemRequest: ['userId', 'orderId', 'data'],
  addOrderItemSuccess: ['orderItem'],
  OrderItemFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const OrderItemTypes = Types;
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
  [Types.ADD_ORDER_ITEM_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_ORDER_ITEM_SUCCESS]: (state, { data }) => state.merge({ data: [...state.data, data], loading: false }),

  [Types.ORDER_ITEM_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
