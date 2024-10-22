
const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

function game() {
    const userInput = parseInt(document.querySelector('.input').value);
    const inputField = document.querySelector('.input');
    const button = document.querySelector('.button');

    if (userInput === answer) {
        inputField.style.border = '2px solid green';
        button.textContent = 'Correct!';
        setTimeout(function() {
            inputField.style.border = '';
            button.textContent = 'Guess!';
            inputField.value = ""; 
            alert("Play Again?");
            location.reload(); 
        }, 1000);
    } else if (userInput < answer) {

        inputField.style.border = '2px solid red';

        button.textContent = 'Too Low!';


        setTimeout(function() {
            inputField.style.border = '';
            button.textContent = 'Guess!';
            inputField.value = ""; 
        }, 1000);
    } else {
        inputField.style.border = '2px solid red';
        button.textContent = 'Too High!';

       
        setTimeout(function() {
            inputField.style.border = '';
            button.textContent = 'Guess!';
            inputField.value = ""; 
        }, 1000);
    }
}
