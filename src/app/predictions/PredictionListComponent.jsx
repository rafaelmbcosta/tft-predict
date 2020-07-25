import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlive } from '../player/duck/slice'
import { selectHistory } from '../history/duck/slice'

const predict = (playerList, historyList) => {
  let lastHistory = historyList.slice(-4).map(item => item.playerId);
  let possible = playerList.filter(player => (!lastHistory.includes(player.id) && player.alive));
  if (possible.length === 0) { return playerList };
  return possible
}
const PredictionListComponent = () => {
  const history = useSelector(selectHistory);
  const player = useSelector(selectAlive);
  return(
    <div>
      <h4>Prediction</h4>
      <ol>
        { predict(player, history).map(element => {
          return <li key={element.id}>{element.name}</li>;
        }) }
      </ol>
    </div>
  )
}

export default PredictionListComponent
