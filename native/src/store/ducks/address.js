import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  loadAddressRequest: ['cep'],
  loadAddressSuccess: ['data'],
  addressFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const AddressTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_ADDRESS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_ADDRESS_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.ADDRESS_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
