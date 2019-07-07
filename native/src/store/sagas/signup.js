import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import SignupActions from '~/store/ducks/signup';

const signup = (name, email, password) => api.post('/signup', { name, email, password });

export function* signupUser(action) {
  try {
    const { data } = yield call(signup, action.name, action.email, action.password);

    yield put(SignupActions.signupSuccess(data));
  } catch (error) {
    yield put(SignupActions.signupFailure(error));
  }
}
