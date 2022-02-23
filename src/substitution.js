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

/*
Substitution cipher
image.png

The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word HELLO would be translated as follows:

H becomes R.
E becomes M.
L becomes W.
O becomes L.
This would result in the code RMWWL. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

substitution()
The substitution() function in the src/substitution.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
alphabet refers to substitution alphabet.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
Examples
substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
Note: In addition to needing to pass the tests and requirements in the instructions here, please review the Rubric Requirements for the human-graded part of this project in your Thinkful curriculum page.

*/
