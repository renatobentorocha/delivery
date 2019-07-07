import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  signupRequest: ['name', 'email', 'password'],
  signupSuccess: ['data'],
  signupFailure: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const SignupTypes = Types;
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
  [Types.SIGNUP_REQUEST]: state => state.merge({ loading: true }),
  [Types.SIGNUP_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.SIGNUP_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
});
