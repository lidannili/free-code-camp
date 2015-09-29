/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

/*
The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
*/

/*
arr.filter(callback[, thisArg])

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
*/

function unite(arr1, arr2, arr3) {
  var myArray=[];
  for(var i=0;i<arguments.length;i++){
    var argArray = arguments[i];
    for(var j=0;j<argArray.length;j++){
      var idx = argArray[j];
      if(myArray.indexOf(idx)<0){
        myArray.push(idx);
      }
    } 
  }
return myArray;
}

/*function unite(arr1, arr2, arr3) {

var flattened =[arr1,arr2,arr3].reduce(function(a, b) {
  return a.concat(b);
});

flattened = flattened.filter (function (v, i, a) { 
  return a.indexOf (v) == i 
});

  return flattened;
}



unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
*/
