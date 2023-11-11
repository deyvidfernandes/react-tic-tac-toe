import { useReducer, useState } from "react";
import detectWin from "./gameLogic";
import Square from "../components/Square/Square";

type EndGameData = {
   isInverse: boolean;
   offset: number,
   winCase: string,
}

type Square = { player: String | undefined, turn: number | undefined }

const initialSquares: Square[][] = [
   [{ player: undefined, turn: undefined }, { player: undefined, turn: undefined }, { player: undefined, turn: undefined }],
   [{ player: undefined, turn: undefined }, { player: undefined, turn: undefined }, { player: undefined, turn: undefined }],
   [{ player: undefined, turn: undefined }, { player: undefined, turn: undefined }, { player: undefined, turn: undefined }]
]

const cloneInitialSquareArray = () => {
   const newArray = initialSquares.map(function (arr) {
      return arr.slice();
   });
   return newArray
}

function reducer(state, action) {
   switch (action.type) {
      case 'play_turn':
         const isXTurn = action.player === "X"
         return {
            ...state,
            squares: state.squares[action.y][action.x] = {
               player: action.player,
               turn: isXTurn ? state.xTurnCount : state.oTurnCount
            },
            turn: isXTurn ? "O" : "X",
            xTurnCount: state.xTurnCount + (1 && action.player === "X"),
            oTurnCount: state.oTurnCount + (1 && action.player === "O")
         }
      case 'end_game_win':
         return {
            ...state,
            isGameRunning: false,
            xWinCount: state.xWinCount + (1 && action.player === "X"),
            oWinCount: state.oWinCount + (1 && action.player === "O"),
            endGameData: {
               isInverse: action.isInverse,
               offset: action.offset,
               winCase: action.winCase,
               winner: action.winner,
            }
         }
      case 'end_game_draw':
         return {
            ...state,
            isGameRunning: false,
            endGameData: {
               winner: "none",
            }
         }
      case 'start_new_game':
         return {
            ...state,
            isGameRunning: true,
            oTurnCount: 0,
            xTurnCount: 0,
            squares: cloneInitialSquareArray(),

         }
      default:
         throw new Error("Unknown action type")
   }
}


type FunctionReturn = {
   handleSquareClick: Function | undefined,
   newGame: Function | undefined,
   endGameData: EndGameData | undefined,
   squares: Square[][] | undefined,
   xWinCount: number | undefined,
   oWinCount: number | undefined,
   isGameRunning: boolean | undefined
}


type TicTacToeState = {
   squares: Square[][],
   xWinCount: number,
   oWinCount: number,
   xTurnCount: number,
   oTurnCount: number,
   turn: string,
   isGameRunning: boolean,
   endGameData: EndGameData,
}

const TicTacToeInitialState = {
   squares: cloneInitialSquareArray(),
   xWinCount: 0,
   oWinCount: 0,
   xTurnCount: 0,
   oTurnCount: 0,
   turn: "X",
   isGameRunning: true,
   endGameData: undefined,
}

const useTicTacToeLogic = (): FunctionReturn => {
   const [gameState, dispatchGameState] = useReducer(reducer, TicTacToeInitialState) as [TicTacToeState, Function]
   const [squares, setSquares] = useState(cloneInitialSquareArray())
   const [xWinCount, setXWinCount] = useState(0)
   const [oWinCount, setOWinCount] = useState(0)
   const [xTurnCount, setXTurnCount] = useState(0)
   const [oTurnCount, setOTurnCount] = useState(0)
   const [turn, setTurn] = useState("X")
   const [isGameRunning, setIsGameRunning] = useState(true)
   const [endGameData, setEndGameData] = useState<EndGameData>()


   const handleSquareClick = (x: number, y: number) => {
      const square = squares[y][x]
      const isSquareEmpty = !square.player
      if (isSquareEmpty && isGameRunning) {
         const newSquares = [...squares]

         switchTurn()
         newSquares[y][x] = {
            player: turn,
            turn: turn === "X" ? xTurnCount : oTurnCount
         }

         setSquares(newSquares)
         const { case: winCase, offset, squares: winSquares } = detectWin(squares, turn, x, y)
         if (winSquares) endGame(winCase, offset, winSquares)

         const isGameInDraw = oTurnCount + xTurnCount == 8
         if (isGameInDraw) endGame("none")
      }
   }

   const switchTurn = () => {
      if (turn === "X") {
         setXTurnCount(xTurnCount + 1)
         setTurn("O")
      } else {
         setOTurnCount(oTurnCount + 1)
         setTurn("X")
      }
   }

   const endGame = (winCase: string, offset?: number, winSquares?: Square[][]) => {
      let winner: string | null = null
      let isInverse: boolean | undefined

      if (winCase === "none") {
         winner = "draw"
      } else {
         if (turn === "X") { winner = "X"; setXWinCount(xWinCount + 1) }
         if (turn === "O") { winner = "O"; setOWinCount(oWinCount + 1) }
      }

      if (winSquares) isInverse = winSquares[0] > winSquares[2]

      setEndGameData({
         isInverse,
         offset: offset,
         winCase: winCase,
         winner,
      } as EndGameData)

      setIsGameRunning(false)
   }

   const newGame = () => {
      setSquares(cloneInitialSquareArray())
      setIsGameRunning(true)
      console.log(isGameRunning)
      setOTurnCount(0)
      setXTurnCount(0)
   }

   return { squares, handleSquareClick, endGameData, newGame, xWinCount, oWinCount, isGameRunning }
}

export { useTicTacToeLogic }
