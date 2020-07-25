import React from 'react';
import { useDispatch } from 'react-redux'
import { remove, kill } from './duck/slice';
import { fight } from '../history/duck/slice';

const PlayerComponent = (props) => {
  const dispatch = useDispatch();

  return(
    <div>
      <h4>{props.player.name}</h4>
      <input type="button" value="remove" onClick={() => dispatch(remove(props.player))} />
      <input type="button" value={props.player.alive ? 'kill' : 'not dead'} onClick={() => dispatch(kill(props.player))} />
      <input type="button" value="fight" onClick={() => dispatch(fight(props.player))} />
    </div>
  );
}

export default PlayerComponent;