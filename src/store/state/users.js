/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter({
  selectId: (user) => user._id,
});

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    status: 'idle',
  }),
  reducers: {
    getUsersRequest(state) {
      state.status = 'loading';
    },
    getUsersSuccess(state, { payload }) {
      const { users } = payload;
      state.status = 'success';
      usersAdapter.addMany(state, users);
    },
    getUsersFail(state) {
      state.status = 'fail';
    },
  },
});

const rootSelector = (state) => state.users;

export const { selectAll: allUsersSelector } =
usersAdapter.getSelectors(rootSelector);


export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersFail,
} = usersSlice.actions;

export default usersSlice.reducer;
