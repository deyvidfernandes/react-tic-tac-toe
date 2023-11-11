import Tile from "../Square/Square.jsx"
import "./style.scss"
import EndGameLine from "../EndGameLine/EndGameLine.jsx"


const Board = (ticTacToeLogic, isGameRunning) => {
  const [squares, handleSquareClick, endGameData] = ticTacToeLogic

  const renderedBoardTiles = squares.map((row, y) => {
    const renderedRow = row.map((square, x) => {
      const onclick = () => { handleSquareClick(x, y) }
      
      const isSquareEmpty = !square.player
      return (
        Tile((x + "-" + y + "square"), square.player, isSquareEmpty, onclick)
      )
    })

    return (
      <tr key={y + "-" + "row"}>{renderedRow}</tr>
    )
  })

  return (
    <div id="tableWrapper">
      {!isGameRunning ? EndGameLine(endGameData) : null}
      <table>
        <tbody>
          {renderedBoardTiles}
        </tbody>
      </table>
    </div>
  )
}

export default Board