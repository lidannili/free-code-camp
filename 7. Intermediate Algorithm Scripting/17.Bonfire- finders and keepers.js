//Create a function that looks through an array (first argument) and 
//returns the first element in the array that passes a truth test (second argument).

function find(arr, func) {
  var num = 0;
  var myArray = [];
  for(var i=0;i<arr.length;i++)
  { 
   num = arr[i];
   if (func(num)){
       myArray.push(num);
    };  
  };
  return myArray[0];
};

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });