import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import api from '../../services/api';
import { login, logout } from '../../services/auth';
import SigninActions from '../ducks/signin';

const signin = (email, password) => api.post('/signin', { email, password });

export function* loginUser(action) {
  try {
    const { data } = yield call(signin, action.email, action.password);

    yield put(SigninActions.signinSuccess(data));
    login(data);
    yield put(push('/app'));
  } catch (error) {
    yield put(SigninActions.signinFailure(error));
  }
}

export function* logoutUser() {
  try {
    logout();

    yield put(SigninActions.logoutSuccess());

    yield put(push('/'));
  } catch (error) {
    yield put(SigninActions.signinFailure(error));
  }
}
