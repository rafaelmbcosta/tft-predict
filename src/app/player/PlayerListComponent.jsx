import React from 'react'
import PlayerComponent from './PlayerComponent';
import { useSelector } from 'react-redux';
import { selectPlayer } from './duck/slice';

const PlayerListComponent = () => {

  const players = useSelector(selectPlayer);

  return(
    <div>
      <h4>Players</h4>
      { players.map(player => {
        return (<PlayerComponent player={player} key={player.id}> </PlayerComponent>)
      }) }
    </div>
  )
}

export default PlayerListComponent
