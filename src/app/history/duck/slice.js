import { createSlice } from '@reduxjs/toolkit';

let counter = 0;

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    value: []
  },
  reducers: {

  }
});

export const { add } = historySlice.actions;

export const selectHistory = state => state.history.value;

export default historySlice.reducer;
