let arrayOfArray = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

function isValidSudoku(array) {

    let board = []

    for (let i = 0; i < array.length; i++) {

        let row = array[i];

        let rowNumbersOnly = []


        for (let i = 0; i < row.length; i++) {
            let value = ''

            if (!isNaN(parseInt(row[i]))) {
                value = parseInt(row[i])
            }

            if (rowNumbersOnly.includes(value)) {
                return
            }
            rowNumbersOnly.push(value)
        }


    }

    console.log(board)
}

isValidSudoku(arrayOfArray)