import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from './duck/slice';
import { Grid, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { StyledBox, StyledTypography } from '../ui-components/styledComponents'

const HistoryItemComponent = (props) => {
  const dispatch = useDispatch();

  return(
    <StyledBox>
      <Grid container direction="row" justify="space-between" align="center" spacing={2}>
        <StyledTypography align="center" variant="body1">{props.player.name}</StyledTypography>
        <IconButton
          color="secondary"
          onClick={() => dispatch(remove(props.player))}
        >
          <Delete />
        </IconButton>
      </Grid>
    </StyledBox>
  );
}

export default HistoryItemComponent