import React from 'react'
import { useSelector } from 'react-redux'
import { selectHistory } from './duck/slice';
import HistoryItem from './HistoryItemComponent';
import { StyledCard } from '../ui-components/styledComponents';
import { Typography, Divider } from '@material-ui/core';

const HistoryComponent = () => {
  const history = useSelector(selectHistory);
  return(
    <StyledCard>
      <Typography variant="h6">HISTORY (LAST 4)</Typography>
      <Divider />
      { history.map(item => {
        return <HistoryItem key={item.id} player={item} />
      })}
    </StyledCard>
  )

}

export default HistoryComponent