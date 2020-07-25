import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './player/duck/slice';

export default configureStore({
  reducer: {
    player: playerReducer
  },
});
