import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './duck/slice';
import { useForm } from 'react-hook-form';

export function PlayerForm() {
  const dispatch = useDispatch();


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

    </div>
  );
}
