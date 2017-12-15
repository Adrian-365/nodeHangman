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
    console.log('\n** 70\'s Rock Bands Hangman! **');
    // console.log(currentWord);
    //an array to hold the _ and letters of the word
    var displayArray = [];
    //a function to display the word to the console
    function displayWord() {
        displayArray = [];
        for (let i = 0; i < wordInPlay.primeArray.length; i++) {
            if (wordInPlay.primeArray[i].guessed === false) {
                displayArray.push(wordInPlay.primeArray[i].hidden);
            } else if (wordInPlay.primeArray[i].guessed === true) {
                displayArray.push(wordInPlay.primeArray[i].revealed);
            }
        };
        // console.log the array using .join('') to concatonate the elements of the array
        console.log('\n' + displayArray.join('') + '\n');
    };


    function makeGuess() {
        // inquire the user to maek a guess
        inquirer.prompt([{
                name: "guess",
                message: "Guess a letter then hit Enter!"
            }])
            .then(function(answer) {
                //set the correctGuess back to false if had been previously true
                wordInPlay.correctGuess = false;
                //compare the guess to the letters in the array            
                for (i = 0; i < wordInPlay.primeArray.length; i++) {
                    //if the guess equals the lett property of one or more of the object in the array, then
                    if (answer.guess.trim().toLowerCase() === wordInPlay.primeArray[i].lett) {
                        //set the value of the guessed property for that Letter object to true so that the letter will display to the terminal, and
                        wordInPlay.primeArray[i].guessed = true;
                        //set the correctGuess property to true so the 'CORRECT!!' will be diplayed to the terminal and we can check if the word has been solved
                        wordInPlay.correctGuess = true;
                    }
                }
                //display the word again, with any newly guessed letters added to the display
                displayWord();
                //if the guess was correct, log CORRECT.  
                if (wordInPlay.correctGuess === true) {
                    console.log("\x1b[32m", 'CORRECT!!!\n', "\x1b[0m");
                    //---------Check if the word has been guessed----------------------------------------------------




                    //------------------------------------------------------------------------------------------------
                } else {
                    // If the guess was not correct, log INCORRECT and reduce the remaining and display the remaining.
                    console.log("\x1b[31m", 'INCORRECT!!!\n', "\x1b[0m");
                    wordInPlay.remaining--;
                    console.log(wordInPlay.remaining + ' guesses remaining!!\n');
                    //---------Check if any guesses remain-------------------------------------------------------



                    //-------------------------------------------------------------------------------------------
                }
                makeGuess();
            })

    }
    // call the function
    displayWord();
    makeGuess();

};


// calling the game function
Hangman();