let currentPlayer = 'X'; // X starts
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementById('ticTacToe').rows[row].cells[col].innerHTML = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch players
    }
}

function checkWinner() {
    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            alert(`${board[i][0]} wins!`);
            resetBoard();
            return;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            alert(`${board[0][i]} wins!`);
            resetBoard();
            return;
        }
    }

    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        alert(`${board[0][0]} wins!`);
        resetBoard();
        return;
    }

    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        alert(`${board[0][2]} wins!`);
        resetBoard();
        return;
    }

    // Check for a draw
    if (!board.flat().includes('')) {
        alert("It's a draw!");
        resetBoard();
    }
}

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    // Clear the table
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => cell.innerHTML = '');

    currentPlayer = 'X'; // X starts again
}
