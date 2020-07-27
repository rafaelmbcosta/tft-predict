import { createSlice } from '@reduxjs/toolkit';

let counter = 7;

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    value: [
      {name: "Rafael", alive: true, id: 0},
      {name: "Pedro", alive: true, id: 1},
      {name: "Zoranildo", alive: true, id: 2},
      {name: "Zanatinha", alive: true, id: 3},
      {name: "Fabio", alive: true, id: 4},
      {name: "Juim", alive: true, id: 5},
      {name: "Perdiga", alive: true, id: 6}
    ]
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
