function isValidSudoku(board) {
    const row = new Map()
    const col = new Map()
    const square = new Map()

    for (let r=0; r<9; r++){
        for (let c=0; c<9; c++){
            let val = board[r][c]

            if (val === '.')continue;

            let sqrBox = `${Math.floor(r /3)}, ${Math.floor(c /3)}`

            
            if (row.get(r) && row.get(r).has(val)) return false;
            if (col.get(c) &&col.get(c).has(val)) return false;
            if (square.get(sqrBox) && square.get(sqrBox).has(val)) return false;

            if (!row.has(r)) row.set(r, new Set());
            if (!col.has(c)) col.set(c, new Set());
            if (!square.has(sqrBox)) square.set(sqrBox, new Set());

            row.get(r).add(val)
            col.get(c).add(val)
            square.get(sqrBox).add(val)
        }
    }
    return true
}



let board = 
[["1","2",".",".","3",".",".",".","."],
["4",".",".","5",".",".",".",".","."],
[".","9","1",".",".",".",".",".","3"],
["5",".",".",".","6",".",".",".","4"],
[".",".",".","8",".","3",".",".","5"],
["7",".",".",".","2",".",".",".","6"],
[".",".",".",".",".",".","2",".","."],
[".",".",".","4","1","9",".",".","8"],
[".",".",".",".","8",".",".","7","9"]];




console.log(isValidSudoku(board))