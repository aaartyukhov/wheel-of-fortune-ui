import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import api from '../../constants/api';
import { getPresentsFail, getPresentsRequest, getPresentsSuccess } from '../state/presents';

function* getPresents() {
  try {
    const { data } = yield axios.get(api.getPresents);

    yield put(
      getPresentsSuccess({
        presents: data,
      }),
    );
  } catch (error) {
    yield put(
      getPresentsFail({
        error,
      }),
    );
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default function* watchGetUsers() {
  yield takeEvery(getPresentsRequest.type, getPresents);
}
