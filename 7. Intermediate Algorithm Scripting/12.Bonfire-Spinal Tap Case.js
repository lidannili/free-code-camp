/*Bonfire: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
    str = str.replace(/([ _-])/g, '-');
     
    if (str.split("-").length === 1) {
      str = str.split(/(?=[A-Z])/).join("-");
    }
   
    return str.toLowerCase();
}
 
spinalCase('This Is Spinal Tap');

