var Letter = require('./letter.js');
//an array of all hangman words - 70's rock bands
var wordList = ['black sabbath', 'deep purple', 'kiss', 'ted nugent', 'judas priest', 'rush', 'rainbow', 'van halen', 'scorpions', 'motorhead', 'the who', 'aerosmith', 'thin lizzy', 'bad company', 'the rolling stones', 'pink floyd', 'jethro tull', 'zz top', 'foreigner', 'heart', 'slade', 'cheap trick', 'santana'];
// Word: a constructor used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.
// var arrayOfObjects = [];
var Word = function() {
    // selects at random from the array of words
    this.currentWord = (wordList[Math.floor(Math.random() * wordList.length)]);
    // (Split) the selected word into an [array of individual letters and spaces].
    this.splitWord = this.currentWord.split('');
    // console.log(this.splitWord);
    //an array to put the object letters in after they are constructed with the Letter constructor.

    //a method to loop through the splitWord array pass each value into the Letter constructor.
    this.primeArray = function() {
        this.arrayOfObjects = [];
        this.splitWord.forEach(function(letter) {
            if (letter === ' ') {
                this.arrayOfObjects.push(new Letter(letter, true));
            } else {
                this.arrayOfObjects.push(new Letter(letter, false));
            }
        })
        console.log("THE ARRAY OF LETTER OBJECTS from the Word constructor:")
        console.log(this.arrayOfObjects);
    }

    this.primeArray();
};



Word();
module.exports = Word;