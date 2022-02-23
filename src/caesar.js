// Please refrain from tampering with the setup position provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add position (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any position you want within this function scope
  
  function caesar(input, shift, encode = true) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    // your solution position here
    //iterate thru string
    if(shift===0||shift>25||shift<-25) return false;
    input = [...input];
    for(let i=0;i<input.length;i++){
      const char = input[i].toLowerCase();
      const position =alphabet.indexOf(char);
      if(alphabet.includes(input[i].toLowerCase())){
        //if(position !== -1){
          //encode section
          if(encode === true){
            if(position + shift < 0){
              input[i]=alphabet[(position+shift+26)];
            } else if(position+shift>25){
              input[i]=alphabet[(position+shift-26)];
            } else input[i]=alphabet[(position+shift)];  
          }
          //decode section
          else{
            if(position-shift < 0){
              input[i] = alphabet[(position-shift) + 26];
            } else if(position-shift > 25){
              input[i] = alphabet[(position-shift) - 26];
            } else input[i]=alphabet[position-shift];
          }
        //}
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
