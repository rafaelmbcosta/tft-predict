import React from 'react'
import PlayerComponent from './PlayerComponent';
import { useSelector } from 'react-redux';
import { selectPlayer } from './duck/slice';
import { Typography, Card, Divider } from '@material-ui/core';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-top: 40px;
  padding-top: 5px;
`;

const PlayerListComponent = () => {

  const players = useSelector(selectPlayer);

  return(
    <StyledCard>
      <Typography variant="h6">PLAYERS</Typography>
      { players.map(player => {
          return (
            <div key={player.id}>
              <Divider />
              <PlayerComponent player={player}> </PlayerComponent>
            </div>
          );
        })
      }
    </StyledCard>
  )
}

export default PlayerListComponent
