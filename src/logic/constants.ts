import { cloneMatrix } from "../util"
import { GameState, Square } from "./types"

export const INITIAL_SQUARE_MATRIX: Square[][] = [
   [{ player: undefined, turn: undefined }, { player: undefined, turn: undefined }, { player: undefined, turn: undefined }],
   [{ player: undefined, turn: undefined }, { player: undefined, turn: undefined }, { player: undefined, turn: undefined }],
   [{ player: undefined, turn: undefined }, { player: undefined, turn: undefined }, { player: undefined, turn: undefined }]
]

export const TIC_TAC_TOE_INITIAL_STATE : GameState = {
   squares: cloneMatrix(INITIAL_SQUARE_MATRIX),
   xWinCount: 0,
   oWinCount: 0,
   xTurnCount: 0,
   oTurnCount: 0,
   turn: "X",
   isGameRunning: true,
   endGameData: {
      winner: "none",
   }
}