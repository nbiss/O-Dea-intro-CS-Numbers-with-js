function posidSudoku(board) {
    const row = new Map()
    const col = new Map()
    const square = new Map()

    for (let r=0; r<9; r++){
        for (let c=0; c<9; c++){
            let val = board[r][c]
            let pos = `${r,c}`

            if (val === '.')continue;

            let sqrBox = `${Math.floor(r /3)}, ${Math.floor(c /3)}`

            if (row.has(pos)  row.get(pos)[0] === r) return false;
            if (col.get(val)[1] === c) return false;
            if (square.has(sqrBox) && square.get(sqrBox)[0] == val[0] && square.get(sqrBox)[1] == val[1]) return false;

            row.set(pos, val); col.set(pos, val); square.set(sqrBox, val)
        }
    }
    return true
}




let board = 
[[".","1",".","5","2",".",".",".","."],
[".",".",".",".",".","6","4","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".","9",".","."],
[".",".",".",".",".",".",".","5","."],
[".",".",".","5",".",".",".",".","."],
["9",".",".",".",".","3",".",".","."],
[".",".","6",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]];

//[5,3] [r,c]



console.log(posidSudoku(board))