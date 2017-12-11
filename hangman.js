var inquirer = require('inquirer');
var Word = require('./word.js')
    // a blank array to hold the blanks and letters that will be displayed in the terminal.

// a variable of guesses remaining
var remaining = 10;


//A function to start the game
function Hangman() {
    var displayArray = [];
    var currentWord = new Word();
    for (i = 0; i < currentWord.arrayOfObjects.length; i++) {
        if (currentWord.arrayOfObjects[i].guessed === false) {
            displayArray.push(currentWord.arrayOfObjects[i].revealed);
        } else if (this.arrayOfObjects[i].guessed === true) {
            displayArray.push(this.arrayOfObjects[i].revealed);
        }
    };
    console.log(currentWord);
    // inquirer.prompt([{
    //     name: "guess",
    //     message: "Guess a letter then hit Enter!"
    // }]).then(function(answer) {

    //         console.log(answer);
    //     }

    // )
};

// calling the game function
Hangman();

// module.exports = Hangman;