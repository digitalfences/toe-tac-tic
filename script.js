let resetButton=document.querySelector(".reset-button");
let squares=document.querySelectorAll(".square");
//squares.forEach(square => square.addEventListener("click", activate))
for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = "whitesmoke";
    squares[i].addEventListener('click', activate);
}
resetButton.addEventListener('click',reset);
/*
Class Declarations
Player
Board

*/

//class Square{}



class Board{
    constructor(){
        this.grid = [];
        for (let i = 0; i < squares.length; i++){
            this.grid.push(squares[i]);
        }
        this.players = [];
        let player1 = new Player("red");
        let player2 = new Player("blue");
        this.players.push(player1);
        this.players.push(player2);
        this.turnCount = 0;
        this.upNext == 0;
        this.playerOrder();
    }
    //Properties of Board
    grid;
    players;
    turnCount;
    upNext;
    //Methods of Board
    playerOrder(){ 
        if(this.turnCount == 0){
            if(Math.random() > Math.random()){
                this.upNext = 0;
            }
            else{
                this.upNext = 1;
            }
            this.turnCount++;
            return;
        }
        if(this.upNext == 0){
            this.upNext = 1;
        }
        else{
            this.upNext = 0;
        }
    }
    checkForWin(){
        let winningCombinations = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [3,4,5],
            [6,7,8]
        ]

        /*
        Main Game victory logic
        check index of grid and board state for patterns that match a win state
        if one is found, end game with victory for winning player
        */
       for (let i = 0; i < winningCombinations.length; i++){
             
            if(this.grid[winningCombinations[i][0]].style.backgroundColor==this.grid[winningCombinations[i][1]].style.backgroundColor&&this.grid[winningCombinations[i][0]].style.backgroundColor == this.grid[winningCombinations[i][2]].style.backgroundColor){
                let color = this.grid[winningCombinations[i][0]].style.backgroundColor
                if (color == "whitesmoke"){
                    continue;
                }
                else if (color == "red"){
                    alert("Player 1 wins");
                    return;
                }
                else if (color == "blue"){
                    alert("Player 2 wins");
                    return;
                }
           }  
       }
       let blankCount = 0;
       for (let i = 0; i < this.grid.length; i++){
            if (this.grid[i].style.backgroundColor == "whitesmoke"){
                blankCount++;
            }
       }
       if (blankCount == 0){
           alert("it's a tie");
           return;
       }

    }
    checkWhoClicked(i){
        if(this.grid[i].style.backgroundColor=="whitesmoke"){
            return '';
        }
        else if (this.grid[i].style.backgroundColor=="red"){
            return 0;
        }
        else{
            return 1;
        }
    }
}
class Player{
    constructor(color){
        this.hasWon = false;
        this.playerColor = color;
    }
    hasWon;
    playerColor;
    squarePickedLast;
}

let gameState = new Board();




/*
Board starts clear
Player clicks
1. check whether is clicked
*/

function activate(e){
    e.preventDefault();
    if (e.target.style.backgroundColor == "whitesmoke"){
        e.target.style.background = gameState.players[gameState.upNext].playerColor;
        gameState.playerOrder();
    }
    gameState.checkForWin();
}
function reset(e){
    e.preventDefault();
    for(let i =0; i < squares.length; i++){
        squares[i].style.background = 'whitesmoke';
    }
}