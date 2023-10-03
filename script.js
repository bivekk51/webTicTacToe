let currentPlayer = "X";
let playerOneWins=0;
let playerTwoWins=0;
let draw=0;
let winner;

let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
welcomeIn();
function welcomeIn(){
  alert("Welcome to TicTacToe");
}

function makeMove(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    document.getElementById("ticTacToe").rows[row].cells[col].innerHTML =
      currentPlayer;
      setTimeout(function () {
        checkWinner();
    }, 100);
    currentPlayer = currentPlayer === "X" ? "O" : "X"; 
  }
}

function updateScoreboard(){
    const scoreboardElement=document.getElementById("scoreboard");
    scoreboardElement.innerHTML=`
    Player 1 = ${playerOneWins} | Player 2= ${playerTwoWins} | Draw=${draw}`;
    resetBoard();
    
}
function checkWinner() {
  
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== "" &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      winner=board[i][0];
      displayWinner();
      resetBoard();
      return;
    }
    if (
      board[0][i] !== "" &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
        winner=board[0][i];
        displayWinner();
        resetBoard();
      return;
    }


  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    winner=board[0][0];
    displayWinner();
    resetBoard();
    return;
  }

  if (
    board[0][2] !== "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    winner=board[0][2];
    displayWinner();
    resetBoard();
    return;
  }
}
  
  if (!board.flat().includes("")) {
    winner=0;
    displayWinner();
    resetBoard();
  }

}

function displayWinner(){
    if(winner==="X"){
        alert("Player 1 wins");
        playerOneWins++;
        updateScoreboard();
    }
    else if(winner==="O"){
        alert("Player 2 wins");
        playerTwoWins++;
        updateScoreboard();
       
    }
    else if(winner===0){
        alert("Its a draw");
        draw++;
        updateScoreboard();
        
    }
}
function resetGame(){
  const scoreboardElement=document.getElementById("scoreboard");
    scoreboardElement.innerHTML=`
    Player 1 = 0 | Player 2= 0 | Draw=0`;
    resetBoard();
    setTimeout(function () {
      alert("Game resetted");
  }, 100);
}

function resetBoard() {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => (cell.innerHTML = ""));
  currentPlayer = "X"; 
}
