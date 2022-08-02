/*
User story 1 
1. Click a square will place either a nought or a cross 
2. Item placed will alternate each turn 
3. No more than 9 turns can be played 
4. A square can only be played once 
5. Noughts should go first
*/ 

let player1 = "nought"
let player2 = "cross"

let whosdraw = player1;

let board = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]]

let gameOver = false;

function takeTurn(row, column) {
    console.log("someone has drawn", row, column)
    if(board[row][column]){
    console.log("turn is taken")
} else {
    board[row][column] = whosdraw;
    if(whosdraw == player1){
        whosdraw = player2;
    } else {
        whosdraw = player1;
    }
    console.log("the board", board)
}}
gameOver = true;






// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    return null;
}

// Set the game state back to its original state to play another game.
function resetGame() {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    whosdraw = player1;
    gameOver = false;
    console.log("resetGame was called");
    }
    


// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}




if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
