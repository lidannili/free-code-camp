function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  myString = str;
  endwith = myString.substr(-target.length);
  if (target === endwith){
    return true;
  }
  else{
    return false;
  }
}

end('Bastian', 'n');

//The substr() method returns the characters in a string beginning at the specified location through the specified number of characters.