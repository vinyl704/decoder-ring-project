// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const decoderKey = [
     [11,'a'],[21,'b'],[31,'c'],[41,'d'],
     [51,'e'],[12,'f'],[22,'g'],[32,'h'],
     [42,'i/j'],[52,'k'],[13,'l'],[23,'m'],
     [33,'n'],[43,'o'],[53,'p'],[14,'q'],
     [24,'r'],[34,'s'],[44,'t'],[54,'u'],
     [15,'v'],[25,'w'],[35,'x'],[45,'y'],
     [55,'z'],
    ];
    let newStr='';
    //encode
    if(encode){
      for(let i=0;i<input.length;i++){
        const char = input[i]
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


/*

Polybius square
  1	2	3	4	  5
1	A	B	C	D	  E
2	F	G	H	I/J	K
3	L	M	N	O	  P
4	Q	R	S	T	  U
5	V	W	X	Y	  Z
The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter B would be represented by the numerical pair 21.

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

"thinkful" -> "4432423352125413"
When decoding the message, each pair of numbers is translated using the coordinates.

polybius()
The polybius() function in the src/polybius.js file has two parameters,

input refers to the inputted text to be encoded or decoded.
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind,

You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
When encoding, your output should still be a string.
When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
Spaces should be maintained throughout.
Capital letters can be ignored.
The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
Examples
polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false

*/