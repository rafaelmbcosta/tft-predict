import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlive } from '../player/duck/slice'
import { selectHistory } from '../history/duck/slice'
import { StyledCard, StyledBox } from '../ui-components/styledComponents';
import { Typography, Divider } from '@material-ui/core';

const predict = (playerList, historyList) => {
  let lastHistory = historyList.slice(0, 4).map(item => item.playerId);
  let possible = playerList.filter(player => (!lastHistory.includes(player.id) && player.alive));
  if (possible.length === 0) { return playerList };
  return possible
}
const PredictionListComponent = () => {
  const history = useSelector(selectHistory);
  const player = useSelector(selectAlive);
  
  return(
    <StyledCard>
      <Typography variant="h6">POSSIBLE PLAYERS</Typography>
      <Divider />
        { predict(player, history).map(element => {
          return (
            <StyledBox justify="center" key={element.id}>
              <Typography variant="body1">{element.name}</Typography>
            </StyledBox>
          );
        }) }
    </StyledCard>
  )
}

export default PredictionListComponent
