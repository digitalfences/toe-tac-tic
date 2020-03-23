let reset=document.querySelector(".reset-button");
let squares=document.querySelectorAll(".square");
//squares.forEach(square => square.addEventListener("click", activate))
for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = "whitesmoke";
    squares[i].addEventListener('click', activate);
}
/*
Class Declarations
Player
Board
Squares

*/

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
    grid;
    players;
    turnCount;
    upNext;
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
            [1,2,3],
            [1,4,7],
            [1,5,9],
            [2,5,8],
            [3,6,9],
            [4,5,6],
            [7,8,9]
        ]
        let boardState = [
            [],
            [],
            []
        ]
        for (let i = 0; i < this.grid.length; i++){
            checkWhoClicked;
        }
    }
    checkWhoClicked(i){
        if(this.grid[i].style.backgroundColor=="whitesmoke"){
            return;
        }
        else if (this.grid[i].style.backgroundColor=="red"){
            return players[0];
        }
        else{
            return players[1];
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