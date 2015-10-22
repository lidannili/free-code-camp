// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.
function binaryAgent(str) {
  var myArray = str.split(" ");
  var newArray = [];
 
  for(var i=0;i<myArray.length;i++)
  {
     newArray.push(String.fromCharCode(parseInt(myArray[i],2)));
    
  };
 
  return newArray.join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
//The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.