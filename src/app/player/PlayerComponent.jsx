import React from 'react';
import { useDispatch } from 'react-redux'
import { remove, kill } from './duck/slice';
import { fight } from '../history/duck/slice';
import styled from 'styled-components';
import { Button, Card, Grid, Box, Typography, CardContent } from '@material-ui/core';

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

const PlayerComponent = (props) => {

  const dispatch = useDispatch();

  const killButton = (player) => {
    if(player.alive) {
      return(<StyledButton 
        size="small" 
        variant="contained" 
        value="fight" 
        onClick={() => dispatch(fight(player))} 
      > 
        Fight 
      </StyledButton>);
    }
  }

  return(
    <Card>
      <CardContent>
        <Grid direction="row" justify="space-between" align="center" container spacing={2}>
          <StyledTypography align="center">{props.player.name}</StyledTypography>
          <Box>
            <StyledButton 
              size="small" 
              variant="contained" 
              color="primary" 
              onClick={() => dispatch(remove(props.player))} >Remove</StyledButton>
            <StyledButton
              size="small"
              variant="contained"
              color={props.player.alive ? 'primary' : 'primary'}
              onClick={() => dispatch(kill(props.player))}
            >
              {props.player.alive ? 'Kill' : 'Not dead'}
            </StyledButton>
            { killButton(props.player)}
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default PlayerComponent;