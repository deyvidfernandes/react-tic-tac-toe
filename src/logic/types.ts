import { Player, WinCase } from "./enums";

export interface Square { 
      player: String | undefined, 
      turn: number | undefined
}

export interface EndGameData {
      isInverse?: boolean
      offset?: number
      winCase?: WinCase
      winSquares?: number[]
      winner: Player | "none"
}
export interface GameState {
   squares: Square[][],
   xWinCount: number,
   oWinCount: number,
   xTurnCount: number,
   oTurnCount: number,
   turn: Player,
   isGameRunning: boolean,
   endGameData: EndGameData,
}
