import { all } from 'redux-saga/effects';
import watchLogInUser from './watchLogInUser';
import watchGetUserPresent from './watchGetUserPresent';
import watchGetUsers from './watchGetUsers';
import watchGetPresents from './watchGetPresents';

export default function* rootSaga() {
  yield all([
    watchLogInUser(),
    watchGetUserPresent(),
    watchGetUsers(),
    watchGetPresents(),
  ]);
}
