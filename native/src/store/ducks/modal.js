import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions types and creators
 */

const { Types, Creators } = createActions({
  showModalRequest: ['message', 'afterClose'],
  hideModalRequest: null,
});

/**
 * loadRequest: () => ({type: Type.LOAD_REQUEST}),
 * loadSuccess: data => ({type: Type.LOAD_SUCCESS, data}),
 * loadFailure: () => ({type: Type.LOAD_FAILURE}),
 */

export const ModalTypes = Types;
export default Creators;

/**
 * Initial state
 */

const INITIAL_STATE = Immutable({
  visible: false,
  message: '',
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_MODAL_REQUEST]: (state, { message }) => state.merge({ message, visible: true }),
  [Types.HIDE_MODAL_REQUEST]: state => state.merge({ visible: false, message: '' }),
});
