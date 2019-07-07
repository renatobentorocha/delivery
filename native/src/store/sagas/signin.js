import { call, put } from 'redux-saga/effects';
import { login, logout } from '~/services/auth';

import api from '~/services/api';
import { navigate } from '~/services/NavigationService';

import SigninActions from '~/store/ducks/signin';

const signin = (email, password) => api.post('/signin', { email, password });

export function* loginUser(action) {
  try {
    const { data } = yield call(signin, action.email, action.password);

    yield put(SigninActions.signinSuccess(data));

    yield call(login, data);

    navigate('Home');
  } catch (error) {
    yield put(SigninActions.signinFailure('Usuário ou senha inválidos'));
  }
}

export function* logoutUser() {
  try {
    yield call(logout);

    yield put(SigninActions.logoutSuccess());

    navigate('Signin');
  } catch (error) {
    yield put(SigninActions.signinFailure(error));
  }
}
