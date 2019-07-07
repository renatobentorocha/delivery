import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  addShoppingRequest: ['order'],
  addShoppingSuccess: ['data'],
  updateShoppingRequest: ['data'],
  updateShoppingSuccess: ['data'],
  deleteShoppingRequest: ['categoryId', 'productId'],
  deleteShoppingSuccess: ['data'],
  addShoppingFailure: ['error'],
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const ShoppingTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  data: [],
  error: null,
  quantity: 0,
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_SHOPPING_REQUEST]: (state, { order }) => state.merge({ order, loading: true }),

  [Types.ADD_SHOPPING_SUCCESS]: (state, { data }) => state.merge({
    data: [...state.data, data],
    loading: false,
  }),

  [Types.UPDATE_SHOPPING_REQUEST]: state => state.merge({ loading: true }),

  [Types.UPDATE_SHOPPING_SUCCESS]: (state, { data }) => {
    const { category_id: categoryId } = data;
    const { id: productId } = data;

    const products = state.data.filter(p => p.category_id !== categoryId && p.id !== productId);

    return state.merge({
      data: [...products, data],
      loading: false,
    });
  },

  [Types.DELETE_SHOPPING_REQUEST]: state => state.merge({ loading: true }),

  [Types.DELETE_SHOPPING_SUCCESS]: (state, { data }) => state.merge({
    data,
    loading: false,
  }),

  [Types.ADD_SHOPPING_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
