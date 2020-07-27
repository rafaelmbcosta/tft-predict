import React from 'react';
import { useDispatch } from 'react-redux'
import { remove, kill } from './duck/slice';
import { fight } from '../history/duck/slice';
import { Grid, Box, IconButton } from '@material-ui/core';
import { Delete, PlayArrow } from '@material-ui/icons'
import { StyledBox, StyledButton, StyledTypography } from '../ui-components/styledComponents'

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
        <StyledTypography className={dashed(props.player)}>{props.player.name}</StyledTypography>
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