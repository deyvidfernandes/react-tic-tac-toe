import { useReducer } from "react"
import { cloneMatrix } from "../util"
import { INITIAL_SQUARE_MATRIX, TIC_TAC_TOE_INITIAL_STATE } from "./constants"
import { GameState } from "./types"
import { Player } from "./enums"

export const reducer = (state = TIC_TAC_TOE_INITIAL_STATE, action): GameState => {
   switch (action.type) {
      
      case 'play_turn':
         const isXTurn = state.turn === "X"
         const newSquares = [...state.squares]
         
         newSquares[action.y][action.x] = {
            player: state.turn,
            turn: isXTurn ? state.xTurnCount : state.oTurnCount
         }
         return {
            ...state,
            squares: newSquares,
            xTurnCount: state.xTurnCount + (state.turn === "X" ? 1 : 0),
            oTurnCount: state.oTurnCount + (state.turn === "O" ? 1 : 0),
            turn: isXTurn ? Player.O : Player.X
         }
      case 'end_game_win':
         return {
            ...state,
            isGameRunning: false,
            xWinCount: state.xWinCount + (state.turn === "X" ? 1 : 0),
            oWinCount: state.oWinCount + (state.turn === "O" ? 1 : 0),
            endGameData: {
               isInverse: action.isInverse,
               offset: action.offset,
               winCase: action.winCase,
               winner: state.turn,
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
            squares: cloneMatrix(INITIAL_SQUARE_MATRIX),
            endGameData: {
               winner: "none",
            }
         }
      default:
         throw new Error("Unknown action type")
   }
}

export const useGameStateReducer = () => {
   return useReducer(reducer, TIC_TAC_TOE_INITIAL_STATE)
}

export const calculateNextGameState = (currentState : GameState, action) : GameState => {
   return reducer(currentState, action)
}