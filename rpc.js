let rockBtn = document.querySelector('.rock-btn')
let paperBtn = document.querySelector('.paper-btn')
let scissorsBtn = document.querySelector('.scissors-btn')
let btnWrap = document.querySelector('.btn-wrapper')
let comScore = document.getElementById('computer')
let playerScore = document.getElementById('player')
let title = document.querySelector('.header-text')
let heading = document.getElementById('heading')
let newText = document.querySelector('.new-text')
let newText2 = document.querySelector('.new-text2')


let messageArray = ["Welcome to... Rock, Paper, Scissors."];
let textPosition = 0;
let speed = 100;

typewriter = () => {
title.innerHTML = messageArray[0].substring(0, textPosition);
    if (textPosition++ != messageArray[0].length){
        setTimeout(typewriter, speed);
    }
}

// function handlerEvent(event){ 
// if (event.path[0] === rockBtn){
//     title.textContent = "You have selected rock.";
// }else if (event.path[0] === paperBtn){
//     title.textContent = "You have selected paper.";
// }else{
//     title.textContent = "You have selected scissors.";
// }
// }

function computerPlay(random){
random = Math.random();
    if (random <= 0.33){
        newText.textContent = "The computer has selected paper.";
        return "The computer has selected rock.";
    }else if (random > 0.33 && random <= 0.66){
        newText.textContent = "The computer has selected paper.";
        return "The computer has selected paper."
    }else {
        newText.textContent = "The computer has selected scissors.";
        return "The computer has selected scissors.";
}
}


function playRock(computer){
computer = computerPlay();
    if (computer === "The computer has selected scissors."){
        newText2.textContent = "You win! Rock beats scissors.";
        return "You win! Rock beats scissors.";
    }else if (computer === "The computer has selected paper."){
        newText2.textContent = "You lose! Paper beats rock.";
        return "You lose! Paper beats rock.";
    }else if (computer === "The computer has selected rock."){
        newText2.textContent = "It's a draw!";
        return "It's a draw!";
    }else{
        newText2.textContent = "Please enter a valid argument.";
        return "Please enter a valid argument.";
}
}

function playPaper(computer){
computer = computerPlay(); 
    if (computer === "The computer has selected rock."){
        newText2.textContent = "You win! Paper beats rock.";
        return "You win! Paper beats rock.";
    }else if (computer === "The computer has selected scissors."){
        newText2.textContent = "You lose! Scissors beats paper.";
        return "You lose! Scissors beats paper.";
    }else if (computer === "The computer has selected paper."){
        newText2.textContent = "It's a draw!";
        return "It's a draw!";
    }else{
        newText2.textContent = "Please enter a valid argument.";
        return "Please enter a valid argument.";
}
}

function playScissors(computer){
computer = computerPlay();
    if (computer === "The computer has selected paper."){
        newText2.textContent = "You win! Scissors beats paper.";
        return "You win! Scissors beats paper.";
    }else if (computer === "The computer has selected rock."){
        newText2.textContent = "You lose! Rock beats scissors.";
        return "You lose! Rock beats scissors.";
    }else if (computer === "The computer has selected scissors."){
        newText2.textContent = "It's a draw!";
        return "It's a draw!";
    }else{
        newText2.textContent = "Please enter a valid argument.";
        return "Please enter a valid argument.";
}
}

function removeText(){
    $(newText).empty();
    $(newText2).empty();
}

function rockResult(game){
game = playRock();
    if (game === "You win! Rock beats scissors."){
        title.textContent = "The player has won this game.";
        return "The player has won this game.";
    }else if (game === "You lose! Paper beats rock."){
        title.textContent = "The computer has won this game.";
        return "The computer has won this game.";
    }else if (game === "It's a draw!"){
        title.textContent = "Play Again.";
        return "Play Again.";
    }else{
        title.textContent = "Error!";
        return "Error!";
}
}

function paperResult(game){
game = playPaper();
    if (game  === "You win! Paper beats rock."){
        title.textContent = "The player has won this game.";
        return "The player has won this game.";
    }else if (game === "You lose! Scissors beats paper.") {
        title.textContent = "The computer has won this game.";
        return "The computer has won this game.";
    }else if (game === "It's a draw!"){
        title.textContent = "Play Again.";
        return "Play Again.";
    }else{
        title.textContent = "Error!";
        return "Error!";
}
}

function scissorsResult(game){
game = playScissors();
    if (game === "You win! Scissors beats paper."){
        title.textContent = "The player has won this game.";
        return "The player has won this game.";
    }else if (game === "You lose! Rock beats scissors."){
        title.textContent = "You lose! Rock beats scissors.";
        return "The computer has won this game.";
    }else if (game === "It's a draw!"){
        title.textContent = "Play Again.";
        return "Play Again.";
    }else{
        title.textContent = "Error!";
        return "Error!";
}
}

let player = 0;
let computer = 0;

function rockScore(winner){
winner = rockResult();
    let playerWin = player+1;
    let computerWin = computer+1;
        if (winner === "The player has won this game."){
            player++;
            playerScore.innerHTML = playerWin;
            return "The player has " + playerWin + " win(s).";
        }else if (winner === "The computer has won this game."){
            computer++;
            comScore.innerHTML = computerWin;
            return "The computer has " + computerWin + " win(s).";
        }else{
            return "No one won this game!";
}
}

function paperScore(winner){
winner = paperResult();
    let playerWin = player+1;
    let computerWin = computer+1;
        if (winner === "The player has won this game."){
            player++;
            playerScore.innerHTML = playerWin;
            return "The player has " + playerWin + " win(s).";
        }else if (winner === "The computer has won this game."){
            computer++;
            comScore.innerHTML = computerWin;
            return "The computer has " + computerWin + " win(s).";
        }else{
            return "No one won this game!";
}
}
 
function scissorsScore(winner){
winner = scissorsResult();
    let playerWin = player+1;
    let computerWin = computer+1;
        if (winner === "The player has won this game."){
            player++;
            playerScore.innerHTML = playerWin;
            return "The player has " + playerWin + " win(s).";
        }else if (winner === "The computer has won this game."){
            computer++;
            comScore.innerHTML = computerWin;
            return "The computer has " + computerWin + " win(s).";
        }else{
            return "No one won this game!";
}
}

// rockBtn.addEventListener('click', handlerEvent);
// paperBtn.addEventListener('click', handlerEvent);
// scissorsBtn.addEventListener('click', handlerEvent);

rockBtn.addEventListener('click', rockScore);
paperBtn.addEventListener('click', paperScore);
scissorsBtn.addEventListener('click', scissorsScore);

rockBtn.addEventListener('click', removeText);
paperBtn.addEventListener('click', removeText);
scissorsBtn.addEventListener('click', removeText);

window.addEventListener("load", typewriter);