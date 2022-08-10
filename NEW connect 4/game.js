/* 
User story 1:
*As two players of Connect 4, we are able to place either a yellow disc or a red disc on the lowest row available on a 7x6 grid by clicking on the respective column of the grid*
- [✓] Clicking a column places either a red or yellow disc in the lowest unoccupied position in the clicked column
- [✓] Colour of disc will alternate each turn (click)
- [✓] No more than 42 turns can be played
- [✓] Red goes first
- [✓] Once a column is full (6 discs), no more discs can be placed

User story 2:
*As two players of Connect 4, if I click reset, the board is cleared, such that the game can start again*
- [✓] Winner message should be cleared
- [✓] Red goes first after reset
- [✓] After reset, games should continue to meet acceptance criteria of user story 1

**User story 3:**

*As two players of Connect 4, if either is able to place four discs of the same colour in a line, they are declared the winner*
- [✓] A winner can be declared if a line occurs along any part of a row
- [✓] A winner can be declared if a line occurs along any part of a column
- [✓] A winner can be declared if a line occurs diagonally
- [✓] If all positions are occupied and no lines are achieved, then nobody is declared the winner
- [✓] If a winner is declared, then no further discs can be placed until the board is reset as per user story 2

**User story 4:**

*As a player of Connect 4, I can track my high score for the current game session (for this story a session won't persist upon a browser refresh)*
- [ ] High scores shown after every game, no matter who wins
- [ ] Score is calculated by subtracting the number of turns made before a winner is declared from 42
- [ ] Scoreboard tracking player victories
- [ ] High scores persist across multiple sessions of the game
*/

let player1 = "red"
let player2 = "yellow"
let whosdraw= player1;
let gameOver = false;
let turn = 0;

let board = [
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null]
]

function takeTurn(rows, columns) {
    console.log("someone has drawn", rows, columns)
    if(gameOver == false){
        if(board[rows][columns]){
        } else {
            // if (checkLow(columns) == rows){
                for (let r = 5; r >=0; r --) {
                    if(board[r][columns] == null) {
                        board[r][columns] = whosdraw 
                        break
                    }
                }
                console.log(board)
                if(whosdraw == player1){
                    whosdraw = player2;
                } else {
                    whosdraw = player1;
                    console.log("whosdraw", whosdraw)
                    console.log("the board", board)}
                }
            }
        }


function checkWinner() {
    console.log("checkWinner was called");

    //check down
    for (i = 0; i < 6; i++) {
        for (j = 0; j < 4; j++){
            if (board[i][j] &&
                board[i][j] === board[i][j+1] &&
                board[i][j+1] === board[i][j+2] &&
                board[i][j+2] === board[i][j+3]){
                    gameOver = true;
                    console.log("Game has been won by", board[i][j])
                    return board[i][j]
                }
        }
    }

    // check right 
    for (i = 0; i < 3; i++){
        for (j = 0; j < 7; j++){
            if (board[i][j] &&
                board[i][j] === board[i+1][j] &&
                board[i+1][j] === board[i+2][j] &&
                board[i+2][j] === board[i+3][j]){
                    gameOver = true;
                    console.log("Game has been won by", board[i][j])
                    return board[i][j]
                }
        }
    }
    // Check down-right
    for (i = 0; i < 3; i++){
        for (j = 0; j < 4; j++){
            if (board[i][j] &&
                board[i][j] === board[i+1][j+1] &&
                board[i+1][j+1] === board[i+2][j+2] &&
                board[i+2][j+2] === board[i+3][j+3]){
                    gameOver = true;
                    console.log("Game has been won by", board[i][j])
                    return board[i][j]
                }
        }
    }
   
    // Check down-left
    for (i = 3; i < 6; i++){
        for (j = 0; j < 4; j++){
            if (board[i][j] &&
                board[i][j] === board[i-1][j+1] &&
                board[i-1][j+1] === board[i-2][j+2] &&
                board[i-2][j+2] === board[i-3][j+3]){
                    gameOver = true;
                    console.log("Game has been won by", board[i][j])
                    return board[i][j]
                }
            }
    } return null;
}

function resetGame() {
    board = [
        [null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]
    whosdraw = player1;
    turn = 0;
    gameOver = false;
    console.log("resetGame was called");
    }
    
// Return the current board state with either a "red" or a "yellow" in
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





