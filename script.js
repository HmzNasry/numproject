const minNum = 1;
const maxNum = 100;
let numOfTries = 0;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

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
        displayMessage(`You got it in ${numOfTries} tries! See if you can beat that!`);
        setTimeout(function() {
            inputField.style.border = '';
            inputField.value = ""; 
            if (confirm("Wanna play again?")) {
                location.reload(); 
            }
        }, 2000);
    } else if (userInput < answer) {
        inputField.style.border = '2px solid red';
        displayMessage('Too Low!');
        setTimeout(function() {
            inputField.style.border = '';
            inputField.value = ""; 
        }, 500);
    } else {
        inputField.style.border = '2px solid red';
        displayMessage('Too High!');
        setTimeout(function() {
            inputField.style.border = '';
            inputField.value = ""; 
        }, 4990);
    }
}

document.querySelector('.input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        game();
    }
});

window.onload = function() {
    const thoughtsBox = document.querySelector('.thoughts');
    typeWriterEffect("Hmmm... I'm thinking of a number between 1 and 100, can you try to guess it?", thoughtsBox, 50); // Initial typing speed
};
