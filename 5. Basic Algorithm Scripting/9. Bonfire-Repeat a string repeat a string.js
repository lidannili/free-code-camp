//Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
function repeat(str, num) {
  // repeat after me
  var myRepeat = [];
  while(myRepeat.length < num){
        myRepeat.push(str);
    }
return myRepeat.join('');
}

repeat('abc', 3);
