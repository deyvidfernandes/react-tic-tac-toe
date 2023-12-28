import { Square } from "./types"
import { Player, WinCase } from "./enums"

interface WinData {
      case: WinCase | undefined, 
      offset: number | undefined, 
      squares: number[]
}

interface DetectWin {
   (squares : Square[][], player: Player, x: number, y: number): 
   WinData | undefined;
}

const detectWin: DetectWin = (squares, player, x, y) => {
   const col : WinData = { case: WinCase.Col, offset: undefined, squares: [] }
   const row : WinData = { case: WinCase.Row, offset: undefined, squares: []}
   const diag : WinData = { case: WinCase.Diagonal, offset: undefined, squares: []}
   const rdiag : WinData = { case: WinCase.RightDiagonal, offset: undefined, squares: []}
   for (let i = 0; i <= 2; i++) {
      if (squares[i][x].player === player) col.squares.push(squares[i][x].turn as number)
      if (squares[y][i].player === player) row.squares.push(squares[y][i].turn as number)
      if (squares[i][i].player === player) diag.squares.push(squares[i][i].turn as number)
      if (squares[2 - i][i].player === player) rdiag.squares.push(squares[2 - i][i].turn as number)
      
      if (row.squares.length === 3) {row.offset = y; return row}
      if (col.squares.length === 3) {col.offset = x; return col}
      if (diag.squares.length === 3) return diag
      if (rdiag.squares.length === 3) return rdiag
   }
}

export default detectWin