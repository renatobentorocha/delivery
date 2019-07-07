import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  putHeaderRequest: ['value'],
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const HeaderTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  value: '',
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_HEADER_REQUEST]: (state, { value }) => state.merge({ value }),
});
