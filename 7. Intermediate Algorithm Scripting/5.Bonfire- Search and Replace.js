function replace(str, before, after) {
 if(before.charAt(0).toUpperCase()==before.charAt(0))
       {
         after = after.charAt(0).toUpperCase() + after.slice(1);
       }

  else{  
        after = after.charAt(0).toLowerCase() + after.slice(1);
       }
  newStr = str.replace(before,after);
  return newStr;
      }       
replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
