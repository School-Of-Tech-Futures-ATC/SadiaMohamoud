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
- [ ] Winner message should be cleared
- [✓] Red goes first after reset
- [✓] After reset, games should continue to meet acceptance criteria of user story 1

**User story 3:**

*As two players of Connect 4, if either is able to place four discs of the same colour in a line, they are declared the winner*
- [ ] A winner can be declared if a line occurs along any part of a row
- [ ] A winner can be declared if a line occurs along any part of a column
- [ ] A winner can be declared if a line occurs diagonally
- [ ] If all positions are occupied and no lines are achieved, then nobody is declared the winner
- [ ] If a winner is declared, then no further discs can be placed until the board is reset as per user story 2
*/

let player1 = "red"
let player2 = "yellow"
let whosdraw= player1;
let gameOver = false;
let turnCounter = 0;

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


// Return either "red", "yellow" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner(p) {
    console.log("checkWinner was called");
    for (int i=0;i<maxCol;i++)
{
    if (gridTable[rowNum][i]==player)
        count++;
    else
        count=0;

    if (count>=4)
        return 1;
}
//Vertical check
for (int i=0;i<maxRow;i++)
{
    if (gridTable[i][colNum]==player)
        count++;
    else
        count=0;

    if (count>=4)
        return 1;
} 
count=0;
// 4 in a row diagonally
for(int i=colNum+1,j=rowNum+1;i<maxRow && j<maxCol;i++,j++) 
{ 
    if(gridTable[j][i]!=player)
    {
        count=1;
        break;        
    }
    count++;
}
// 4 in a row diagonally
for(int i=colNum-1,j=rowNum-1;i>=0 && j>=0;i--,j--) 
{ 
    if(gridTable[j][i]!=player)
    {
        count=1;
        break;        
    }
    count++;
}
// 4 in a row diagonally
for(int i=colNum+1,j=rowNum-1;i<maxRow && j>=0;i++,j--) 
{ 
    if(gridTable[j][i]!=player)
    {
        count=1;
        break;        
    }
    count++;
}

for(int i=colNum-1,j=rowNum+1;i>=0 && j<maxCol;i--,j++) 
{ // 4 in a row diagonally
    if(gridTable[j][i]!=player)
    {
        count=1;
        break;        
    }
    count++;
}

if(count>=4)
    return 1;

return 0;
}
  
    
    return null;
}

// Set the game state back to its original state to play another game.
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
    turnCounter = 0;
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



