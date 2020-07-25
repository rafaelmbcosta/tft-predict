import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlayer, add } from './duck/slice';
import { useForm } from 'react-hook-form';
import PlayerComponent from './PlayerComponent';

export function PlayerForm() {
  const dispatch = useDispatch();
  const players = useSelector(selectPlayer);
  const [player, setPlayer] = useState('');
  const onSubmit = data => {
    dispatch(add(data.playerName))
  };

  const { register, handleSubmit, errors } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Player Name</label>
        <input name="playerName" type="text" ref={register({required: true, minLength: 2})} />
        <input
          type="submit"
          aria-label="Increment value"
          value="ADD PLAYER" />
          { errors.playerName && errors.playerName.type === "required" && (<p>Name is Required</p>) }
          { errors.playerName && errors.playerName.type === "minLength" && (<p>Cannot be lower than 2</p>) }
      </form>
      <div>
        { players.map(player => {
          return (<PlayerComponent player={player} key={player.id}> </PlayerComponent>)
        }) }
      </div>
    </div>
  );
}
