// var hangman = require('./hangman.js');

var wordlist = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'rush', 'rainbow', 'van halen', 'scorpions', 'motorhead', 'the who', 'aerosmith', 'thin lizzy', 'bad company', 'the rolling stones', 'pink floyd', 'jethro tull', 'zz top', 'foreigner', 'heart', 'slade', 'cheap trick', 'santana'];
// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
function Word(currentWord) {
    this.currentWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log(this.currentWord);
};

Word();

module.exports = Word;