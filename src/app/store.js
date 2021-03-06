import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player/duck/slice';
import historyReducer from './history/duck/slice';

export default configureStore({
  reducer: {
    player: playerReducer,
    history: historyReducer
  },
});
