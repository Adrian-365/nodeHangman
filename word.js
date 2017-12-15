var Letter = require('./letter.js');
//an array of all hangman words - 70's rock bands
// var wordList = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'rush', 'rainbow', 'van halen', 'scorpions', 'motorhead', 'the who', 'aerosmith', 'thin lizzy', 'bad company', 'the rolling stones', 'pink floyd', 'jethro tull', 'zz top', 'foreigner', 'heart', 'slade', 'cheap trick', 'santana'];
// Word: a constructor used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var Word = function(currentWord) {
    // // selects at random from the array of words
    this.currentWord = currentWord;
    // (Split) the selected word into an [array of individual letters and spaces].


    //a method to loop through the splitWord array pass each value into the Letter constructor.
    this.primeArray = this.currentWord.split('').map(function(letter) {
        if (letter === ' ') {
            return new Letter(letter, true);
        } else {
            return new Letter(letter, false);
        }
    })


    console.log("THE 'arrayOfObjects' from word.js:")
    console.log(this.arrayOfObjects);
};

// Word();
module.exports = Word;