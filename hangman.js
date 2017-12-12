var inquirer = require('inquirer');
var Word = require('./word.js')
    // a blank array to hold the blanks and letters that will be displayed in the terminal.

// a variable of guesses remaining
var remaining = 10;


//A function to start the game
function Hangman() {
    var displayArray = [];
    var currentWord = new Word();
    console.log('Console logging arrayofobjects from the hangman.js below:');
    console.log(currentWord.arrayOfObjects);

    function displayWord() {
        for (i = 0; i < currentWord.arrayOfObjects.length; i++) {
            if (currentWord.arrayOfObjects[i].guessed === false) {
                displayArray.push(currentWord.arrayOfObjects[i].hidden);
            } else if (this.arrayOfObjects[i].guessed === true) {
                displayArray.push(this.arrayOfObjects[i].revealed);
            }
        };
        console.log("Console logging the displayArray from the hangman.js below:")
        console.log(displayArray);

    };
    displayWord();


    inquirer.prompt([{
            name: "guess",
            message: "Guess a letter then hit Enter!"
        }]).then(function(answer) {
            console.log(answer.guess);
            currentWord.arrayOfObjects.forEach(function(answer) {
                if (answer.guess === lett) {
                    guessed === true;
                }
            });
        })
        // .then
};

// calling the game function
Hangman();