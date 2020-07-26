import React from 'react'
import PlayerComponent from './PlayerComponent';
import { useSelector } from 'react-redux';
import { selectPlayer } from './duck/slice';
import { Typography } from '@material-ui/core'

const PlayerListComponent = () => {

  const players = useSelector(selectPlayer);

  return(
    <div>
      <Typography variant="h4">PLAYERS</Typography>
      { players.map(player => {
        return (<PlayerComponent player={player} key={player.id}> </PlayerComponent>)
      }) }
    </div>
  )
}

export default PlayerListComponent
