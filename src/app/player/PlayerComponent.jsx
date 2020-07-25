import React from 'react';
import { useDispatch } from 'react-redux'
import { remove, kill } from './duck/slice';
import { fight } from '../history/duck/slice';
import Button from '@material-ui/core/Button';

const PlayerComponent = (props) => {
  const dispatch = useDispatch();

  return(
    <div>
      <h4>{props.player.name}</h4>
      <Button color="primary" onClick={() => dispatch(remove(props.player))} >Remove</Button>
      <Button
        className="m-1"
        color={props.player.alive ? 'warning' : 'info'}
        onClick={() => dispatch(kill(props.player))}
      >
        {props.player.alive ? 'Kill' : 'Not dead'}
      </Button>
      <Button className="m-1" value="fight" onClick={() => dispatch(fight(props.player))} > Fight </Button>
    </div>
  );
}

export default PlayerComponent;