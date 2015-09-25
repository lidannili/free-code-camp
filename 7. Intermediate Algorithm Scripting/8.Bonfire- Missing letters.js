/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for(i=0;i<str.length-1;i++){
    var dif= str.charCodeAt(i+1)-str.charCodeAt(i);
    if(dif != 1){
     var num = str.charCodeAt(i+1)-1;
     var missingLetter = String.fromCharCode(num);
    }
    
  }
  return missingLetter;
}

fearNotLetter('abce');

//str.charCodeAt(index) example:'ABC'.charCodeAt(0); // returns 65
// String.fromCharCode(65, 66, 67);  // "ABC"
