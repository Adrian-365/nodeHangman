// Letter: A constructur used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data
var Letter = function(lett, guessed) {
    this.lett = lett;
    this.guessed = guessed;
    this.hidden = '_ ';
    this.revealed = this.lett + ' ';
};

module.exports = Letter;