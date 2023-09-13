/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {      
        for (let j = 0; j < 9; j++) {
            let entry = board[i][j];
            if (entry !== '.') {
                if (rows[i].has(entry)) return false;
                if (cols[j].has(entry)) return false;
                if (boxes[getSudokuBox(i, j)].has(entry)) return false;
                rows[i].add(entry);
                cols[j].add(entry);
                boxes[getSudokuBox(i, j)].add(entry);
            }
        }
    }

    return true;
};

function getSudokuBox(i, j) {
  // Calculate the row and column indices of the box
  const boxRow = Math.floor(i / 3);
  const boxCol = Math.floor(j / 3);

  // Calculate the box number
  const boxNumber = 3 * boxRow + boxCol;

  return boxNumber;
}
