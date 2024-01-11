const restartButton = document.querySelector('.restart');

let markerButton = document.querySelectorAll('.btn');

restartButton.addEventListener('click', () => {
    markerButton.forEach( button => {
        button.textContent = '';
    });
});

markerButton.forEach( button => {
    button.addEventListener('click', () => {
        if(button.textContent == ''){
            button.textContent = "X";
        }
        else{
            button.textContent = "O";
        }
    });
});


function Player(playerName, marker){
    return { playerName, marker };
}

function Gameboard(){

}

function displayController(){
    
}









