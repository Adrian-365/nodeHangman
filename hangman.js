var inquirer = require('inquirer');
// var word = require('./word');
// var letters = require('./letters');

var wordlist = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'ruch', 'rainbow', 'van halen', 'scorpions', 'motorhead']


//A function to start the game
function start() {
    inquirer.prompt([{
        name: "guess",
        message: "Guess a letter then hit Enter!"
    }]).then(function(answer) {

            console.log(answer);
        }

    )
};


start();

// A function to take in guesses and check them against the answers

// A funciton to go to the next round