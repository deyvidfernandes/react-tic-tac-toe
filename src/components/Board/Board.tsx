import React from "react"
import { useGameContext } from "../../logic/GameContext"
import Tile from "../Square/Square.jsx"
import EndGameLine from "../EndGameLine/EndGameLine.jsx"
import "./style.scss"

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
  
  const isGameInDraw = (gameState.endGameData)?.winner != "none"

  return (
    <div id="tableWrapper">
      {!gameState.isGameRunning && isGameInDraw && <EndGameLine/>}
      <table>
        <tbody>
          {renderedBoardTiles}
        </tbody>
      </table>
    </div>
  )
}

export default Board