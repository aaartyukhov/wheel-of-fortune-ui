import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import api from '../../constants/api';
import { getUsersFail, getUsersRequest, getUsersSuccess } from '../state/users';

function* getUsers() {
  try {
    const { data } = yield axios.get(api.getUsers);

    yield put(
      getUsersSuccess({
        users: data,
      }),
    );
  } catch (error) {
    yield put(
      getUsersFail({
        error,
      }),
    );
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

export default function* watchGetUsers() {
  yield takeEvery(getUsersRequest.type, getUsers);
}

