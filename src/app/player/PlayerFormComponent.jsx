import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { add } from './duck/slice';
import { useForm } from 'react-hook-form';
import { Button, TextField, Grid, Typography } from '@material-ui/core';

export function PlayerForm() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onSubmit = data => {
    dispatch(add(data.playerName))
    setText('')
  };

  const { register, handleSubmit, errors } = useForm();

  const errorText = (text) => {
    return <Typography variant="body1" color={'error'}>{text}</Typography>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="row" spacing={1} justify="center" alignItems="center">
          <Grid item xs={11}>
            <TextField
              fullWidth
              name="playerName"
              value={text}
              onChange={(event) => setText(event.target.value) }
              inputRef={register({required: true, minLength: 2})}
            >
            </TextField>
          </Grid>
          <Grid item xs={1} >
            <Button
              color="primary"
              type="submit"
              variant="contained"
              value="ADD PLAYER">
                ADD 
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container direction="column" justify="center" alignItems="center">
        { errors.playerName && errors.playerName.type === "required" && (errorText('Name is Required')) }
        { errors.playerName && errors.playerName.type === "minLength" && (errorText('Cannot be lower than 2')) }
      </Grid>

    </div>
  );
}
