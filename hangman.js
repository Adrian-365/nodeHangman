var inquirer = require('inquirer');
// var word = require('./word');
// var letters = require('./letters');

//A function to start the game
function Hangman() {
    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter then hit Enter!"
    }]).then(function(answer) {

            console.log(answer);
        }

    )
};

// calling the game function
Hangman();

module.exports = Hangman;