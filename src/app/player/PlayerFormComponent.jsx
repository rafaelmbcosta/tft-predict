import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from './duck/slice';
import './duck/style.css';
import { useForm } from 'react-hook-form';
import { Button, TextField, Grid, Typography, Card, CardContent, Container } from '@material-ui/core';

export function PlayerForm() {
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(add(data.playerName))
  };

  const { register, handleSubmit, errors } = useForm();

  const errorText = (errorMsg) => {
    return <Typography variant="body1" color={'error'}>{errorMsg}</Typography>;
  }

  return (
    <Container className="fullWidth">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardContent>
              <Grid container direction="row" spacing={1} justify="center" alignItems="center">
                <Grid item xs={11}>
                  <TextField
                    fullWidth
                    name="playerName"
                    inputRef={register({required: true, minLength: 2})}
                  />
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
          </CardContent>
          <Grid container direction="column" justify="center" alignItems="center">
            { errors.playerName && errors.playerName.type === "required" && (errorText('Name is Required')) }
            { errors.playerName && errors.playerName.type === "minLength" && (errorText('Cannot be lower than 2')) }
          </Grid>
        </Card>
      </form>
    </Container>
  );
}
