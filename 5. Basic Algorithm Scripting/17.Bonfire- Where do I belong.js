function where(arr, num) {
  // Find my place in this sorted array.
arr.push(num);
//arr.sort([compareFunction])
arr.sort(function(a, b) {
  return a - b;
});
return arr.indexOf(num);
};

where([40, 60], 50);
/*arr.sort([compareFunction])
/*compareFunction
Optional. Specifies a function that defines the sort order. 
If omitted, the array is sorted according to each character's 
Unicode code point value, according to the string conversion of each element.

If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, 
but sorted with respect to all different elements. 
Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers 
(e.g. Mozilla versions dating back to at least 2003) respect this.
If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. 
If inconsistent results are returned then the sort order is undefined

