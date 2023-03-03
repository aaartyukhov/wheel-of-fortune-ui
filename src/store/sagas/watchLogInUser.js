import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import api from '../../constants/api';
import { sendLoginFail, sendLoginRequest, sendLoginSuccess } from '../state/user';

function* login({ payload }) {
  const { email } = payload;
  try {
    const { data } = yield axios.post(api.auth, { email });

    yield put(
      sendLoginSuccess({
        user: data,
      }),
    );
  } catch (error) {
    yield put(
      sendLoginFail({
        error,
      }),
    );
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default function* watchLogIn() {
  yield takeEvery(sendLoginRequest.type, login);
}
