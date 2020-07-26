import { createSlice } from '@reduxjs/toolkit';

let counter = 0;

export const historySlice = createSlice({
  name: 'history',
  initialState: {
    value: []
  },
  reducers: {
    fight: (state, action) => {
      state.value.push({ ...action.payload, id: counter, playerId: action.payload.id})
      counter++;
    },
    remove: (state, action) => {
      state.value = state.value.filter(element => (element.id !== action.payload.id))
    }
  }
});

export const { fight, remove } = historySlice.actions;

export const selectHistory = state => [...state.history.value].reverse();

export default historySlice.reducer;
