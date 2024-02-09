import axios from 'axios';
import { put, takeEvery, select } from 'redux-saga/effects';
import api from '../../constants/api';
import constructUrl from '../../utils/url';
import {
  sendUserPresentFail,
  sendUserPresentRequest,
  sendUserPresentSuccess,
  userSelector,
} from '../state/user';

function* getUserPresent() {
  const { _id: id } = yield select(userSelector);
  try {
    const { data } = yield axios.get(constructUrl(api.getUserPresent, { id }));

    yield put(
      sendUserPresentSuccess({
        user: data,
      }),
    );
  } catch (error) {
    yield put(
      sendUserPresentFail({
        error,
      }),
    );
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default function* watchGetUserPresent() {
  yield takeEvery(sendUserPresentRequest.type, getUserPresent);
}
