import React from 'react';
import './App.css';
import { PlayerForm } from './app/player/PlayerFormComponent';
import PlayerListComponent from './app/player/PlayerListComponent';
import HistoryComponent from './app/history/HistoryComponent';
import PredictionList from './app/predictions/PredictionListComponent';

function App() {
  return (
    <div className="App">
      <h1> Predict </h1>
      <PlayerForm />
      <PredictionList />
      <PlayerListComponent />
      <HistoryComponent />
    </div>
  );
}

export default App;
