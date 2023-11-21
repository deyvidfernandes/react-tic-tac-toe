import "./style.scss"
import { useGameContext } from "../../logic/GameContext"
import React from "react"


const NewGameButton = () => {
   const {gameState, newGame} = useGameContext()
   if (!gameState.isGameRunning) {
      const higherWinCount = Math.max(gameState.oWinCount, gameState.xWinCount)
      const winnerWinCount = gameState.endGameData.winner == "X" ? gameState.xWinCount : gameState.oWinCount
      const isScoreboardTied = gameState.xWinCount === gameState.oWinCount
      const winnerHasHigherWinCount = winnerWinCount === higherWinCount && !isScoreboardTied
      const didHigherWinCountBecameOdd =  (1 === higherWinCount % 2) && winnerHasHigherWinCount
      const isHigherScoreEven = higherWinCount % 2 === 0
      const nextOddScore = (isHigherScoreEven ? 1 : 2) + higherWinCount
      const byOnePoint = higherWinCount === nextOddScore - 1

      let message : string;
      if (didHigherWinCountBecameOdd) {
         message = `Melhor de ${higherWinCount + 2}?`
      } else if (byOnePoint && isScoreboardTied) {
         message = "Quem fizer vence!"
      } else if  (byOnePoint && !isScoreboardTied && winnerHasHigherWinCount) {
         message = `Se o ${gameState.endGameData.winner} fizer, acabou!`
      }
      else {
         message = "Continuar"
      } 
      return (
         <button onClick={newGame} className={"newGameButton " + gameState.endGameData.winner.toLowerCase()}>{message}</button>
      )
   }
}

export default NewGameButton