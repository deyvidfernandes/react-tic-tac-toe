const detectWin = (squares, player, x, y) => {
   const col = { case: "col", offset: undefined, squares: []}
   const row = { case: "row", offset: undefined, squares: []}
   const diag = { case: "diag", offset: undefined, squares: []}
   const rdiag = { case: "rdiag", offset: undefined, squares: []}

   for (let i = 0; i <= 2; i++) {
      if (squares[i][x].player === player) col.squares.push(squares[i][x].turn)
      if (squares[y][i].player === player) row.squares.push(squares[y][i].turn)
      if (squares[i][i].player === player) diag.squares.push(squares[i][i].turn)
      if (squares[2 - i][i].player === player) rdiag.squares.push(squares[2 - i][i].turn)
      
      if (row.squares.length === 3) {row.offset = y; return row}
      if (col.squares.length === 3) {col.offset = x; return col}
      if (diag.squares.length === 3) return diag
      if (rdiag.squares.length === 3) return rdiag
   }
   return { case: undefined, offset : undefined, squares: undefined}
}

export default detectWin