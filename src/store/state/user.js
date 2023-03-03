import { createSlice } from '@reduxjs/toolkit';
import { requestStatuses } from '../../constants/common';

const initialState = {
  statusLogin: requestStatuses.idle,
  statusGetPresent: requestStatuses.idle,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    sendLoginRequest(state) {
      return {
        ...state,
        statusLogin: requestStatuses.loading,
      };
    },

    sendLoginSuccess(state, { payload }) {
      const { user } = payload;
      return {
        ...state,
        statusLogin: requestStatuses.success,
        user,
      };
    },
    sendLoginFail(state, { payload }) {
      const { error } = payload;
      return {
        ...state,
        statusLogin: requestStatuses.fail,
        error,
      };
    },

    sendUserPresentRequest(state) {
      return {
        ...state,
        statusGetPresent: requestStatuses.loading,
      };
    },

    sendUserPresentSuccess(state, { payload }) {
      const { user } = payload;
      return {
        ...state,
        statusGetPresent: requestStatuses.success,
        user,
      };
    },
    sendUserPresentFail(state, { payload }) {
      const { error } = payload;
      return {
        ...state,
        statusGetPresent: requestStatuses.fail,
        error,
      };
    },
  },
});

const rootSelector = (state) => state.user;

export const userLoginStatusSelector = (state) => rootSelector(state).statusLogin;
export const userGetPresentStatusSelector = (state) => rootSelector(state).statusGetPresent;
export const userSelector = (state) => rootSelector(state).user;

export const {
  sendLoginRequest,
  sendLoginSuccess,
  sendLoginFail,
  sendUserPresentRequest,
  sendUserPresentSuccess,
  sendUserPresentFail,
} = userSlice.actions;

export default userSlice.reducer;
