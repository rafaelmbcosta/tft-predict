import React from 'react';
import './App.css';
import { PlayerForm } from './app/player/PlayerFormComponent';
import PlayerListComponent from './app/player/PlayerListComponent';
import HistoryComponent from './app/history/HistoryComponent';
import PredictionList from './app/predictions/PredictionListComponent';
import { Typography, Container, Grid } from '@material-ui/core';

function App() {
  return (
    <Container justify="center" className="App">
      <Typography variant="h3">PREDICT </Typography>
      <PlayerForm></PlayerForm>
      <Grid container justify="center" direction="row" spacing={3}>
        <Grid item xs={4}><PredictionList /></Grid>
        <Grid item xs={4}><PlayerListComponent /></Grid>
        <Grid item xs={4}><HistoryComponent /></Grid>
      </Grid>
    </Container>
  );
}

export default App;
