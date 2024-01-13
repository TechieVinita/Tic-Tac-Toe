let isWinner = false;
let playerXTurn = true;
let playerOTurn = false;

let output = document.querySelector('.output');
const restartButton = document.querySelector('.restart');

let markerButton = document.querySelectorAll('.btn');

restartButton.addEventListener('click', () => {
    markerButton.forEach( button => {
        button.textContent = '';
    });
});

markerButton.forEach( button => {
    button.addEventListener('click', () => {
        if(playerXTurn === true && ( button.textContent === '' || isWinner === false) ){
            button.textContent = "X";
            displayController();
            playerXTurn = false;
            playerOTurn = true;
        }
        else if(playerOTurn === true && ( button.textContent === '' || isWinner === false) ){
            button.textContent = "O";
            displayController();
            playerOTurn = false;
            playerXTurn = true;
        }
    });
});


function Player(playerName, marker){
    return { playerName, marker};
}

// function Gameboard(){
//     let gameboard = [ [0, 0, 0],
//                       [0, 0, 0],
//                       [0, 0, 0] ];


//     for(let i=0; i<3; i++){
//         for(let j=0; j<3; j++){
//             if( (i === j) || (i+j === 4) ){
//                 isWinner = true;
//                 displayController();
//             }
//             else{
//                 displayController();
//             }

//         }
//     }
// }

function displayController(){
    if(playerOTurn === true){
        output.textContent = `Player X's turn`;
        if(isWinner === true){
            output.textContent = `Player O is Winner!`;
        }
    }
    else if(playerXTurn === true){
        output.textContent = `Player O's turn`;
        if(isWinner === true){
            output.textContent = `Player X is Winner!`;
        }
    }
}









