import { call, put } from 'redux-saga/effects';
import api from 'axios';
import { API_CEP } from 'react-native-dotenv';

import AddressActions from '~/store/ducks/address';

export function* loadAddress(action) {
  try {
    const { data } = yield call(api.get, `${API_CEP}/${action.cep}/json/`);

    yield put(AddressActions.loadAddressSuccess(data));
  } catch (error) {
    yield put(AddressActions.AddressFailure(error));
  }
}
