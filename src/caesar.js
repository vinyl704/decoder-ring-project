// Please refrain from tampering with the setup position provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add position (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any position you want within this function scope
  let inRange = (num)=>{return (num >= 97 && num<= 122)}
  let newStr = ""
  
  
  function caesar(input, shift, encode = true) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    // your solution position here
    //iterate thru string
    //if index in alphabet array
    if(shift===0||shift>25||shift<-25) return false
    input = [...input]
    for(let i=0;i<input.length;i++){
      const char = input[i].toLowerCase();
      if(alphabet.includes(input[i].toLowerCase())){
        if(alphabet.indexOf(char) !== -1){
          const position =alphabet.indexOf(char) 

          //encode section
          if(encode === true){
            if(position + shift < 0){
              input[i]=alphabet[(position+shift+26)]
            }
            else if(position+shift>25){input[i]=alphabet[(position+shift-26)]}
            
            else input[i]=alphabet[(position+shift)];
            
            
          }

          //decode section
          else{
            if(position-shift < 0){
              input[i] = alphabet[(position-shift) + 26]
            }
            else if(position-shift > 25){
              input[i] = alphabet[(position-shift) - 26]

            }
            else
              input[i]=alphabet[position-shift];
              
           
              
            
             
          }}
        };
        };
    //decode/encode each letter
    return input.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

/*

caesar()
The caesar() function in the src/caesar.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other nonalphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
Examples
caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false
*/
