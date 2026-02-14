// 1. Fixed the random number generation (1-100)
let randomNum = Math.floor(Math.random() * 100 + 1);

const userGuess = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const pastGeuss = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas"); // You'll need this to append the 'New Game' button

const para = document.createElement("p");

let prevguess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userGuess.value);
        validGuess(guess);
    });
}

function validGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        prevguess.push(guess);
        if (numGuess === 10) { // Limit to 10 attempts
            displayGuess(guess);
            displayMsg(`Game Over! The number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMsg("You guessed it right! 🎉");
        endGame();
    } else if (guess < randomNum) {
        displayMsg("Number is TOO low! 📉");
    } else if (guess > randomNum) {
        displayMsg("Number is TOO high! 📈");
    }
}

function displayGuess(guess) {
    userGuess.value = ''; // Clean the input
    pastGeuss.innerHTML += `${guess}, `; // Update array display
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`; // Update remaining attempts
}

function displayMsg(msg) {
    lowOrhi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    userGuess.value = '';
    userGuess.setAttribute('disabled', ''); // Stop user from typing
    para.classList.add('button');
    para.innerHTML = `<h2 id="newGame" style="cursor: pointer; background: #212121; color: #fff; padding: 10px; border-radius: 5px;">Start New Game</h2>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function() {
        randomNum = Math.floor(Math.random() * 100 + 1);
        prevguess = [];
        numGuess = 1;
        pastGeuss.innerHTML = '';
        lastResult.innerHTML = `10`;
        userGuess.removeAttribute('disabled');
        startOver.removeChild(para);
        lowOrhi.innerHTML = '';
        playGame = true;
    });
}