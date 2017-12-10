// var hangman = require('./hangman.js');
//an array of all hangman words - 70's rock bands
var wordList = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'rush', 'rainbow', 'van halen', 'scorpions', 'motorhead', 'the who', 'aerosmith', 'thin lizzy', 'bad company', 'the rolling stones', 'pink floyd', 'jethro tull', 'zz top', 'foreigner', 'heart', 'slade', 'cheap trick', 'santana'];
// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
var Word = function(currentWord) {
    // selects at random frmo the array of words
    this.currentWord = (wordList[Math.floor(Math.random() * wordList.length)]);
    console.log(this.currentWord);
    this.splitWord = currentWord.parse('');
    console.log(this.splitWord);
};

Word();
module.exports = Word;