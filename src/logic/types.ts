import { Player, WinCase } from "./enums";

export type Square = { player: String | undefined, turn: number | undefined }

export type EndGameData = {
      isInverse?: boolean;
      offset?: number,
      winCase?: WinCase,
      winner: Player | "none"
}
export type GameState = {
   squares: Square[][],
   xWinCount: number,
   oWinCount: number,
   xTurnCount: number,
   oTurnCount: number,
   turn: Player,
   isGameRunning: boolean,
   endGameData: EndGameData,
}