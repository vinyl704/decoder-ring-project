// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet) return false; // checking for existence of cipher key
    if([...alphabet].length !== 26) return false; //making sure the cipher key has only enough letters to mask alphabet
    if(![...alphabet].every(letter=>alphabet.indexOf(letter) === alphabet.lastIndexOf(letter))) return false;
    let sub = [..."abcdefghijklmnopqrstuvwxyz"]; //spreading true alphabet across an array
    let alpha = [...alphabet];//spreading cipher alphabet

    input = [...input.toLowerCase()];
    for(let letter in input){ //start of for in loop
      if(input[letter] === " ") input[letter]=" "  //if statement
        else {//else
          encode //checking operation mode
            ?input[letter] = alpha[sub.indexOf(input[letter])]
            :input[letter] = sub[alpha.indexOf(input[letter])]
      }
    }
      return (input.join("")) //return encoded string
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
