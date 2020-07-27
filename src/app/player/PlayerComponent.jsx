import React from 'react';
import { useDispatch } from 'react-redux'
import { remove, kill } from './duck/slice';
import { fight } from '../history/duck/slice';
import styled from 'styled-components';
import { Button, Grid, Box, Typography, IconButton } from '@material-ui/core';
import { Delete, PlayArrow } from '@material-ui/icons'

const StyledButton = styled(Button)`
  margin: 5px;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  font-weight: bold;
`;

const StyledBox = styled(Box)`
  margin: 10px;
  padding-top: 5px;
  padding-right: 10px;
`;

const PlayerComponent = (props) => {

  const dispatch = useDispatch();
  
  const removeButton = (player) => {
    if (player.alive) {
      return(
        <IconButton
        color="primary" 
        onClick={() => dispatch(remove(props.player)) } 
      >
        <Delete></Delete>
      </IconButton>
      )
    }
  }

  const dashed = (player) => {
    if (!player.alive) { return 'dead' }
  }

  const fightButton = (player) => {
    if(player.alive) {
      return(
        <IconButton
          color="secondary"
          onClick={() => dispatch(fight(player))}
        >
          <PlayArrow></PlayArrow>
        </IconButton>
      );
    }
  }

  return(
    <StyledBox>
      <Grid direction="row" justify="space-between" align="center" container spacing={2}>
        <StyledTypography className={dashed(props.player)} align="center">{props.player.name}</StyledTypography>
        <Box xs={12}>
          <Grid container justify="space-between" direction="row">
            <Grid item xs={6}>
              <StyledButton
                size="small"
                variant="contained"
                color={ props.player.alive ? 'primary' : 'secondary' }
                onClick={() => dispatch(kill(props.player))}
              >
                {props.player.alive ? 'Kill' : 'Alive'}
              </StyledButton>
            </Grid>
            <Grid item xs={3}>
              { removeButton(props.player) }
            </Grid>
            <Grid item xs={3}>
              { fightButton(props.player)}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </StyledBox>
  );
}

export default PlayerComponent;