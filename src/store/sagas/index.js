import { all } from 'redux-saga/effects';
import watchLogInUser from './watchLogInUser';
import watchGetUserPresent from './watchGetUserPresent';

export default function* rootSaga() {
  yield all([
    watchLogInUser(),
    watchGetUserPresent(),
  ]);
}
