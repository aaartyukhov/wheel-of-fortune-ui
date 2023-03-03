import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user';
import usersReducer from './users';
import presentsReducer from './presents';

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  presents: presentsReducer,
});

export default rootReducer;
