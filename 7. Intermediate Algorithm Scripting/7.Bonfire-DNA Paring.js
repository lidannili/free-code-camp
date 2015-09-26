/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [['G', 'C'], ['C','G'],['G', 'C']]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pair(str) {
 var myString = str.split("");
 var myPair = [];
  for(i=0;i<myString.length;i++){
    if(myString[i]=="G"){
      myPair.push(['G','C']);
    }
    else if(myString[i]=="C"){
      myPair.push(['C','G']);
    }
    else if(myString[i]=="A"){
      myPair.push(['A','T']); 
    }
    else if(myString[i]=="T"){
      myPair.push(['T','A']); 
    } 
  }
 return myPair;
}

pair("GCG");
