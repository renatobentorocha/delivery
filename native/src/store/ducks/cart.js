import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  loadCartRequest: ['user_id'],
  loadCartSuccess: ['data'],
  addItemCartRequest: ['item'],
  addItemCartSuccess: ['item'],
  delItemCartRequest: ['user_id', 'itemId'],
  delItemCartSuccess: ['itemId'],
  delCartRequest: ['user_id'],
  delCartSuccess: null,
  cartFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const CartTypes = Types;
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
  [Types.LOAD_CART_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CART_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),

  [Types.ADD_ITEM_CART_REQUEST]: state => state.merge({ loading: true }),
  [Types.ADD_ITEM_CART_SUCCESS]: (state, { data }) => {
    state.merge({ data: [...state.data, { ...data }], loading: false });
  },

  [Types.DEL_CART_REQUEST]: state => state.merge({ loading: true }),
  [Types.DEL_CART_SUCCESS]: state => state.merge({
    data: [],
    loading: false,
  }),

  [Types.DEL_ITEM_CART_REQUEST]: state => state.merge({ loading: true }),
  [Types.DEL_ITEM_CART_SUCCESS]: (state, { itemId }) => state.merge({
    data: state.data.filter(item => item.id !== itemId),
    loading: false,
  }),
  [Types.CART_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
