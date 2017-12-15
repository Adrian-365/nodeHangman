var inquirer = require('inquirer');
var Word = require('./word.js')
    //an array of all hangman words - 70's rock bands
var wordList = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'rush', 'rainbow', 'van halen', 'scorpions', 'motorhead', 'the who', 'aerosmith', 'thin lizzy', 'bad company', 'the rolling stones', 'pink floyd', 'jethro tull', 'zz top', 'foreigner', 'heart', 'slade', 'cheap trick', 'santana'];

// console.log('The wordInPlay from hangman.js:');
// console.log(wordInPlay);
// console.log('The primeArray from hangman.js:');
// console.log(wordInPlay.primeArray);

// A function to start the game
function Hangman() {
    // selects a word at random from the array of words
    let currentWord = (wordList[Math.floor(Math.random() * wordList.length)]);
    var wordInPlay = new Word(currentWord);
    //an array to hold the _ and letters of the word
    var displayArray = [];
    //a function to display the word
    function displayWord() {
        for (i = 0; i < wordInPlay.primeArray.length; i++) {
            if (wordInPlay.primeArray[i].guessed === false) {
                displayArray.push(wordInPlay.primeArray[i].hidden);
            } else if (wordInPlay.primeArray[i].guessed === true) {
                displayArray.push(wordInPlay.primeArray[i].revealed);
            }
        };
        console.log("The displayArray from hangman.js:")
        console.log(displayArray);

    };
    displayWord();


    inquirer.prompt([{
            name: "guess",
            message: "Guess a letter then hit Enter!"
        }])
        // .then(function(answer) {
        //     console.log(answer.guess);
        //     wordInPlay.arrayOfObjects.forEach(function(answer) {
        //         if (answer.guess === lett) {
        //             guessed === true;
        //         }
        //     });
        // })

};


// calling the game function
Hangman();