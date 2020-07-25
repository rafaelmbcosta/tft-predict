import React from 'react';
import { useDispatch } from 'react-redux'
import { remove, kill } from './duck/slice';
import { fight } from '../history/duck/slice';

const PlayerComponent = (props) => {
  const dispatch = useDispatch();

  return(
    <div>
      <h4>{props.player.name}</h4>
      <div>vivo: {props.player.alive ? 'Vivo' : 'Morto' }</div>
      <input type="button" value="remove" onClick={() => dispatch(remove(props.player))} />
      <input type="button" value="kill" onClick={() => dispatch(kill(props.player))} />
      {/* <input type="button" value="fight" onClick={() => ''} /> */}
    </div>
    
  );
}

export default PlayerComponent;