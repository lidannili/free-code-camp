//Compare two arrays and return a new array with any items not found in both of the original arrays.
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i=0; i<arr2.length;i++){
     var idx = arr1.indexOf(arr2[i]);
     if(idx===-1){
       newArr.push(arr2[i]);
     }
  for(var j=0; j<arr1.length;j++){
     var idx2 = arr2.indexOf(arr1[j]);
     var idx3 = newArr.indexOf(arr1[j]);
     if(idx2===-1 & idx3 ===-1){
       newArr.push(arr1[j]);
     }
  }
  }
  

  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

