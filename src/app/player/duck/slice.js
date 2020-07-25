import { createSlice } from '@reduxjs/toolkit';

let counter = 0;

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    value: []
  },
  reducers: {
    add: (state, action) => {
      if (state.value.length < 8) {
        state.value.push({ name: action.payload, alive: true, id: counter})
        counter++;
      }
    },
    remove: (state, action) => {
      console.log(action.payload)
      state.value = state.value.filter(element => {
        if (element.id !== action.payload.id) { return element}
      })
    },
    kill: (state, action) => {
      state.value = state.value.map(element => {
        if (element.id == action.payload.id) { element.alive = !element.alive}
        return element
      })
    }
  }
});

export const { add, remove, kill } = playerSlice.actions;

export const selectPlayer = state => state.player.value;

export default playerSlice.reducer;
