import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from './duck/slice';

const HistoryItemComponent = (props) => {
  const dispatch = useDispatch();

  return(
    <div>
      <p>{props.player.id} - {props.player.name}</p>
      <input type="button" value="remove" onClick={() => dispatch(remove(props.player))} />
    </div>
  );
}

export default HistoryItemComponent