import React from 'react';
import './App.css';
import { PlayerForm } from './app/player/PlayerFormComponent';
import PlayerListComponent from './app/player/PlayerListComponent';
import HistoryComponent from './app/history/HistoryComponent';
import PredictionList from './app/predictions/PredictionListComponent';
import { Typography, Container, Grid } from '@material-ui/core';

function App() {
  return (
    <Container>
      <Grid container direction="column" spacing={3} justify="center" alignItems="center">
        <Grid item><Typography variant="h3">PREDICT </Typography></Grid> 
        <Grid item><PlayerForm /></Grid>
        <Grid item><PredictionList /></Grid>
        <Grid item><PlayerListComponent /></Grid>
        <Grid item><HistoryComponent /></Grid>
      </Grid>
    </Container>
  );
}

export default App;
