//require the Letter constructor from letter.js
var Letter = require('./letter.js');
//the Word cosnstructor
var Word = function(currentWord) {
    // selects at random from the array of words
    this.currentWord = currentWord;
    // a variable of guesses remaining
    this.remaining = 10;
    //a boolean to track whether or not a correct guess was made
    this.correctGuess = false;
    // (Split) the selected word into an [array of individual letters and spaces].
    //a method to loop through the splitWord array pass each value into the Letter constructor.
    this.primeArray = this.currentWord.split('').map(function(letter) {
        if (letter === ' ') {
            return new Letter(letter, true);
        } else {
            return new Letter(letter, false);
        }
    })
};

module.exports = Word;