var inquirer = require('inquirer');
var Word = require('./word.js')
    //an array of all hangman words - 70's rock bands
var wordList = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'rush', 'rainbow', 'van halen', 'scorpions', 'motorhead', 'the who', 'aerosmith', 'thin lizzy', 'bad company', 'the rolling stones', 'pink floyd', 'jethro tull', 'zz top', 'foreigner', 'heart', 'slade', 'cheap trick', 'santana'];
// a variable of guesses remaining
var remaining = 10;


//this is just a short-version of the below function for purposes of checking the arrayOfObjects
function Hangman() {
    // selects at random from the array of words
    let currentWord = (wordList[Math.floor(Math.random() * wordList.length)]);
    var wordInPlay = new Word(currentWord);
    console.log('The wordInPlay from hangman.js:');
    console.log(wordInPlay);
    console.log('The arrayofobjects from hangman.js:');
    console.log(wordInPlay.primeArray);


}

//A function to start the game
// function Hangman() {
//     var displayArray = [];
//     var wordInPlay = new Word();
//     console.log('The arrayofobjects from hangman.js:');
//     console.log(wordInPlay.arrayOfObjects);

//     function displayWord() {
//         for (i = 0; i < wordInPlay.arrayOfObjects.length; i++) {
//             if (wordInPlay.arrayOfObjects[i].guessed === false) {
//                 displayArray.push(wordInPlay.arrayOfObjects[i].hidden);
//             } else if (this.arrayOfObjects[i].guessed === true) {
//                 displayArray.push(this.arrayOfObjects[i].revealed);
//             }
//         };
//         console.log("The displayArray from hangman.js:")
//         console.log(displayArray);

//     };
//     displayWord();


//     inquirer.prompt([{
//             name: "guess",
//             message: "Guess a letter then hit Enter!"
//         }]).then(function(answer) {
//             console.log(answer.guess);
//             wordInPlay.arrayOfObjects.forEach(function(answer) {
//                 if (answer.guess === lett) {
//                     guessed === true;
//                 }
//             });
//         })
//
// };
// };

// calling the game function
Hangman();