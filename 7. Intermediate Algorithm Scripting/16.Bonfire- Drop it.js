//Drop the elements of an array (first argument), starting from the front, 
//until the predicate (second argument) returns true.


function drop(arr, func) {
  // Drop them elements.
  var l = arr.length;
  
  for(var i=0; i < l;i++){
    if (!func(arr[0])){
      arr.shift();
    }  
    else {
      break;
    };
  };
   return arr;
}

drop([1, 2, 3, 4], function(n) {return n > 5; });


//The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, then returns the removed value. If the length property is 0, undefined is returned.
