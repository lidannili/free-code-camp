// the provided string with the first letter of each word capitalized.

function titleCase(str) {
     var myString = str.split(" ");
     for (var i=0; i<myString.length; i++){
       var j = myString[i].charAt(0).toUpperCase(); 
       //the charAt() method returns the specified character from a string.
       var k = myString[i].slice(1).toLowerCase();
       //The slice() method returns a shallow copy of a portion of an array into a new array object. slice(1) 
       //arr.slice([begin[, end]])
       //If end is omitted, slice extracts to the end of the sequence (arr.length).
       
       myString[i] = j + k;
     }
     return myString.join(" ");
      
}

titleCase("I'm a little tea pot");


/*function ucFirstAllWords( str )
{
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}
*/