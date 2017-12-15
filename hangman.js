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
    console.log(currentWord);
    //an array to hold the _ and letters of the word
    var displayArray = [];
    //a function to display the word to the console
    function displayWord() {
        displayArray = [];
        for (i = 0; i < wordInPlay.primeArray.length; i++) {
            if (wordInPlay.primeArray[i].guessed === false) {
                displayArray.push(wordInPlay.primeArray[i].hidden);
            } else if (wordInPlay.primeArray[i].guessed === true) {
                displayArray.push(wordInPlay.primeArray[i].revealed);
            }
        };
        // console.log the array using .join('') to concatonate the elements of the array
        console.log('\n' + displayArray.join('') + '\n');
    };
    // call the function
    displayWord();
    // inquire the user to maek a guess
    inquirer.prompt([{
            name: "guess",
            message: "Guess a letter then hit Enter!"
        }])
        .then(function(answer) {
            //set the correctGuess back to false if had been previously true
            wordInPlay.correctGuess === false;
            //compare the guess to the letters in the array            
            for (i = 0; i < wordInPlay.primeArray.length; i++) {
                if (answer.guess.trim().toLowerCase() === wordInPlay.primeArray[i].lett) {
                    wordInPlay.primeArray[i].guessed = true;
                    wordInPlay.correctGuess = true;
                }
            }
            displayWord();
            if (wordInPlay.correctGuess === true) {
                console.log('CORRECT!!!\n');
            } else {
                console.log('INCORRECT!!!\n');
                wordInPlay.remaining--;
                console.log(wordInPlay.remaining + ' guesses remaining!!\n')
            }
        })

};


// calling the game function
Hangman();