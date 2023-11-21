import detectWin from "./gameLogic";
import { calculateNextGameState, useGameStateReducer } from "./gameStateReducer";

export const useTicTacToeLogic = () => {
   const [gameState, dispatchGameState] = useGameStateReducer()

   const takeSquare = (x : number, y : number) => {
      const nextGameState = calculateNextGameState(gameState, {type: 'play_turn', x, y})

      const {
         case: winCase, 
         squares: winSquares,
         offset
      } = detectWin(nextGameState.squares, gameState.turn, x, y)
      
      const isGameInDraw = nextGameState.oTurnCount + nextGameState.xTurnCount == 9
      
      if (winSquares) {
         dispatchGameState({
            type: "end_game_win", 
            isInverse: winSquares[0] > winSquares[2],
            offset: offset,
            winCase: winCase,
         })
      } else if (isGameInDraw) {
         dispatchGameState({type: "end_game_draw"})
      }
      dispatchGameState({type: 'play_turn', x, y})
   }

   const handleSquareClick = (x: number, y: number) => {
      const isSquareEmpty = !gameState.squares[y][x].player
      if ( isSquareEmpty && gameState.isGameRunning) {
         takeSquare(x, y)
      }
   }

   const newGame = () => {
      dispatchGameState({type: "start_new_game"})
   }

   return { gameState, handleSquareClick, newGame }
}

export type useTicTacToeLogic_returnType = ReturnType<typeof useTicTacToeLogic>