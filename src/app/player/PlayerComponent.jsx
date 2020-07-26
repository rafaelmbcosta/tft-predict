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
  padding-right: 10px;
`;

const PlayerComponent = (props) => {

  const dispatch = useDispatch();

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
        <StyledTypography align="center">{props.player.name}</StyledTypography>
        <Box>
          {/* text-decoration: line-through; when its dead, findout how to dynamicaly put style or class */}
          <StyledButton
            size="small"
            variant="contained"
            color="primary"
            onClick={() => dispatch(kill(props.player))}
          >
            {props.player.alive ? 'Kill' : 'Not dead'}
          </StyledButton>
          <IconButton
            color="primary" 
            onClick={() => dispatch(remove(props.player)) } 
            >
            <Delete></Delete>
          </IconButton>
          { fightButton(props.player)}
        </Box>
      </Grid>
    </StyledBox>
  );
}

export default PlayerComponent;