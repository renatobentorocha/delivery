import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  signinRequest: ['email', 'password'],
  signinSuccess: ['data'],
  logoutRequest: null,
  logoutSuccess: null,
  signinFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const SigninTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  data: null,
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGNIN_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.LOGOUT_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOGOUT_SUCCESS]: state => state.merge({ data: null, loading: false }),
  [Types.SIGNIN_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
