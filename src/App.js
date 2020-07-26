import React from 'react';
import './App.css';
import theme from './app/theme'
import { PlayerForm } from './app/player/PlayerFormComponent';
import { selectPlayer } from './app/player/duck/slice';
import { selectHistory } from './app/history/duck/slice';
import PlayerListComponent from './app/player/PlayerListComponent';
import HistoryComponent from './app/history/HistoryComponent';
import PredictionList from './app/predictions/PredictionListComponent';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Typography, AppBar, Toolbar, ThemeProvider, Container, Grid } from '@material-ui/core';

const StyledContainer = styled(Container)`
  margin-top: 100px;
`;

function App() {
  const players = useSelector(selectPlayer)
  const histories = useSelector(selectHistory)

  const renderPlayers = () => {
    if (players.length > 0) { return <PlayerListComponent />; }
  }
  
  const renderHistory = () => {
    if (histories.length > 0) { return <HistoryComponent />; }
  }
  
  const renderPredictions = () => {
    if (players.length > 0) { return <PredictionList />; }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">TFT PREDICT </Typography>
        </Toolbar>
      </AppBar>
      <StyledContainer justify="center" mt={5} align="center" className="App">
        <PlayerForm></PlayerForm>
        <Grid container justify="center" direction="row" spacing={3}>
          <Grid item xs={4}>{ renderPredictions() }</Grid>
          <Grid item xs={4}>{ renderPlayers() }</Grid>
          <Grid item xs={4}>{ renderHistory() }</Grid>
        </Grid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
