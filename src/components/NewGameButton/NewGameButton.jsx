import "./style.scss"


const NewGameButton = (ticTacToeLogic) => {
   const [squares, handleSquareClick, endGameWinData, newGame, xWinCount, oWinCount] = ticTacToeLogic
   
   return (
      <button onClick={newGame}>Novo jogo</button>
   )
}

export default NewGameButton