import React from 'react'
import { useSelector } from 'react-redux'
import { selectHistory } from './duck/slice';
import HistoryItem from './HistoryItemComponent';


const HistoryComponent = () => {
  const history = useSelector(selectHistory);
  return(
    <div>
      <h4> History</h4>
      { history.map(item => {
        return <HistoryItem key={item.id} player={item} />
      })}
    </div>
  )

}

export default HistoryComponent