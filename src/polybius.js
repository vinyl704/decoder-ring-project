// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here

    //Creating cipher key
    const decoderKey = [
     [11,'a'],[21,'b'],[31,'c'],[41,'d'],
     [51,'e'],[12,'f'],[22,'g'],[32,'h'],
     [42,'i/j'],[52,'k'],[13,'l'],[23,'m'],
     [33,'n'],[43,'o'],[53,'p'],[14,'q'],
     [24,'r'],[34,'s'],[44,'t'],[54,'u'],
     [15,'v'],[25,'w'],[35,'x'],[45,'y'],
     [55,'z'],
    ];
    let newStr=''; //String variable for storing/building new message
    //encode
    if(encode){
      for(let i=0;i<input.length;i++){
        const char = input[i].toLowerCase()
        char === " "
          ?newStr+=" "
          :null
        for(let j of decoderKey){
          if(j[1].includes(char)){
            newStr += j[0];
          }
        }
      }
    }else{
      //decode
      if(input.split(" ").join('').length%2) return false;
      for(let i=0;i<input.length-1;i+=2){
        if(input[i] == " "){
         newStr += " "
         i+=1;
        }
        const char = input.substring(i,i+2)
        for(let j of decoderKey){
          if(char == j[0]){
            newStr += j[1];
          }
        }  
      }
    }
    return newStr
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };