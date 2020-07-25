import { createSlice } from '@reduxjs/toolkit';

let counter = 0;

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    value: []
  },
  reducers: {
    add: (state, action) => {
      if (state.value.length < 7) {
        state.value.push({ name: action.payload, alive: true, id: counter})
        counter++;
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter(element => (element.id !== action.payload.id))
    },
    kill: (state, action) => {
      state.value.forEach(element => {
        if (element.id === action.payload.id) { element.alive = !element.alive}
      })
    }
  }
});

export const { add, remove, kill } = playerSlice.actions;

export const selectPlayer = state => state.player.value;

export const selectAlive = state => {
  return state.player.value.filter(player => player.alive) || []
}

export default playerSlice.reducer;
