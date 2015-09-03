function destroyer(arr) {
  // Remove all the values
  var toRemove = [];
  for (var i=1;i<arguments.length;i++){
    toRemove.push(arguments[i]);
  }
  return arr.filter(function(item){
    if(toRemove.indexOf(item)>=0){
      return false;
    }
    else{
      return true;
    }
  })
  return arr;
}
//The indexOf() method returns the position of the first occurrence of a specified value in a string.



destroyer([1, 2, 3, 1, 2, 3], 2, 3);
