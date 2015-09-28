/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.*/

function translate(str) {
var vowal = ['a','e','i','o','u'];
for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowal.length; j++)
        {
            if ((str.charAt(0)!==vowal[j])&&(str.charAt(i) == vowal[j])) 
            {
                str = str.substring(i) + str.substring(0,i) + "ay";
                return str;
            }
            else if(str.charAt(0)==vowal[j])
            {
                str = str + "way";
                return str;
            } 
                    
                    
                    
        }
}
}

translate("rrroie");