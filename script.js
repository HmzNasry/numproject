const minNum = 1;
const maxNum = 100;
let numOfTries = 0;
let answer; // Declare answer without initializing it

function startGame() {
    numOfTries = 0; // Reset the number of tries
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // Generate a new random number
}

function typeWriterEffect(text, element, speed, callback) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function displayMessage(message) {
    const thoughtsBox = document.querySelector('.thoughts');
    thoughtsBox.textContent = ''; // Clear previous text
    typeWriterEffect(message, thoughtsBox, 50); // Set typing speed here
}

function game() {
    const userInput = parseInt(document.querySelector('.input').value);
    const inputField = document.querySelector('.input');

    numOfTries++;

    if (userInput === answer) {
        inputField.style.border = '2px solid green';
        displayMessage(`Woohoo! Got it in ${numOfTries} tries 🎉 See if you can beat that!`);
        setTimeout(function() {
            inputField.style.border = '';
            inputField.value = ""; 
            if (confirm("Wanna play again?")) {
                startGame(); // Start a new game
                displayMessage("Hmmm... I'm thinking of a number between 1 and 100, can you try to guess it?");
            }
        }, 3000);
    } else if (userInput < answer) {
        inputField.style.border = '2px solid red';
        displayMessage('Too Low, Try Again!');
        setTimeout(function() {
            inputField.style.border = '';
            inputField.value = ""; 
        }, 250);
    } else {
        inputField.style.border = '2px solid red';
        displayMessage('Too High, Try Again!');
        setTimeout(function() {
            inputField.style.border = '';
            inputField.value = ""; 
        }, 250);
    }
}

document.querySelector('.input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        game();
    }
});

window.onload = function() {
    startGame(); // Initialize the game
    const thoughtsBox = document.querySelector('.thoughts');
    typeWriterEffect("Hmmm... I'm thinking of a number between 1 and 100, can you try to guess it?", thoughtsBox, 50); // Initial typing speed
};
