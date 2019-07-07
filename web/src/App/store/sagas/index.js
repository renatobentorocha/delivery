import { all, takeLatest } from 'redux-saga/effects';
import { OrderTypes } from '../ducks/order';
import { loadOrder } from './order';
import { SigninTypes } from '../ducks/signin';
import { loginUser, logoutUser } from './signin';

export default function* rootSaga() {
  yield all([
    takeLatest(OrderTypes.LOAD_ORDER_REQUEST, loadOrder),
    takeLatest(SigninTypes.SIGNIN_REQUEST, loginUser),
    takeLatest(SigninTypes.LOGOUT_REQUEST, logoutUser),
  ]);
}
