/* eslint-disable no-param-reassign */
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const presentsAdapter = createEntityAdapter({
  selectId: (present) => present._id,
});

const presentsSlice = createSlice({
  name: 'presents',
  initialState: presentsAdapter.getInitialState({
    status: 'idle',
  }),
  reducers: {
    getPresentsRequest(state) {
      state.status = 'loading';
    },
    getPresentsSuccess(state, { payload }) {
      const { presents } = payload;
      state.status = 'success';
      presentsAdapter.addMany(state, presents);
    },
    getPresentsFail(state) {
      state.status = 'fail';
    },
  },
});

const rootSelector = (state) => state.presents;

export const { selectAll: allPresentsSelector } = presentsAdapter.getSelectors(rootSelector);

export const {
  getPresentsRequest,
  getPresentsSuccess,
  getPresentsFail,
} = presentsSlice.actions;

export default presentsSlice.reducer;
