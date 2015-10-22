//Flatten a nested array. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby
  var myArray=[];
  var flatten = function(arg){
  if (!Array.isArray(arg)){
    myArray.push(arg);
  }
  else {
    for (var a in arg){
      flatten(arg[a]);
    }
  }
};
  arr.forEach(flatten);
//The forEach() method executes a provided function once per array element.

  return myArray;
}

steamroller([1, [2], [3, [[4]]]]);

//The Array.isArray() method returns true if an object is an array, false if it is not.