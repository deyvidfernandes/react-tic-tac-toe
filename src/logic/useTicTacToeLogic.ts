import detectWin from "./gameLogic";
import { calculateNextGameState, useGameStateReducer } from "./gameStateReducer";

export const useTicTacToeLogic = () => {
   const [gameState, dispatchGameState] = useGameStateReducer()

   const takeSquare = (x : number, y : number) => {
      const nextGameState = calculateNextGameState(gameState, {type: 'play_turn', x, y})

      const winData = detectWin(nextGameState.squares, gameState.turn, x, y)

      const hasDraw = nextGameState.oTurnCount + nextGameState.xTurnCount == 9
      
      if (winData) {
         dispatchGameState({
            type: "end_game_win", 
            isInverse: winData.squares![0] > winData.squares![2],
            offset: winData.offset,
            winCase: winData.case,
            winSquares: winData.squares!
         })
      } else if (hasDraw) {
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