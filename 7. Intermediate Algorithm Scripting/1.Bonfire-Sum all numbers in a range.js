function sumAll(arr) {
  var max = Math.max.apply(null,arr);
  var min = Math.min.apply(null,arr);
  var myArray = [];
  for (var i = min; i <= max; i += 1) {
    myArray.push(i);
  };
  
  var total=myArray.reduce(function(a, b){
    return a + b;
  });
  return total;
  
  
}

sumAll([1, 4]);