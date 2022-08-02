/* 
User story 1:
-As two players of Connect 4, we are able to place either a yellow disc or a red disc on the lowest row available on a 7x6 grid 
by clicking on the respective column of the grid
-Clicking a column places either a red or yellow disc in the lowest unoccupied position in the clicked column
-Colour of disc will alternate each turn (click)
-No more than 42 turns can be played - DONE
-Red goes first
-Once a column is full (6 discs), no more discs can be placed
*/

let player1 = "red"
let player2 = "yellow"

let whosGoesFirst= player1;

let board = [
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null], 
    [null, null, null, null, null, null, null]
]


// let gameOver = false;

// function takeTurn(row, column) {
//     console.log("someone has drawn", row, column)
//     if(board[row][column]){
//     console.log("turn is taken")
// } else {
//     board[row][column] = whosdraw;
//     if(whosdraw == player1){
//         whosdraw = player2;
//     } else {
//         whosdraw = player1;
//     }
//     console.log("the board", board)
// }}
// gameOver = true;


// function checkWinner() {
//     console.log("checkWinner was called");
//     return null;
// }

function resetGame() {
    board = [
        [null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null], 
        [null, null, null, null, null, null, null]
    ]
    whosdraw = player1;
    gameOver = false;
    console.log("resetGame was called");
    
}

