import Tile from "../Square/Square.jsx"
import "./style.scss"
import EndGameLine from "../EndGameLine/EndGameLine.jsx"
import { useGameContext } from "../../logic/GameContext.js"
import React from "react"
import { EndGameData } from "../../logic/types.js"

const Board = () => {
  const {gameState} = useGameContext()
  const renderedBoardTiles = gameState.squares.map((row, y) => {
    const renderedRow = row.map((_, x) => {
      return (
        <Tile key={`${x}-${y}-square`} x={x} y={y}/>
      )
    })

    return (
      <tr key={y + "-" + "row"}>{renderedRow}</tr>
    )
  })
  
  const isGameInDraw = (gameState.endGameData as EndGameData)?.winner != "none"
  return (
    <div id="tableWrapper">
      {!gameState.isGameRunning && isGameInDraw && EndGameLine()}
      <table>
        <tbody>
          {renderedBoardTiles}
        </tbody>
      </table>
    </div>
  )
}

export default Board