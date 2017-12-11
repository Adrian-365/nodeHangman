// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data
var Letters = function(lett, guessed) {
    this.lett = lett;
    this.guessed = guessed;
    this.hidden = '_ ';
    this.revealed = this.lett + ' ';
};

// //loops through the word and creates an object for each letter or space.  letters are set to "guessed = false" while spaces are set to guessed = true"
// Letter.prototype.split() {
//     this

// }

// //displays all guessed and unguessed letters as " _ _ d   _ _ p p _ _ _ _" for expample.
// Letter.prototype.display() {};

module.exports = Letters;