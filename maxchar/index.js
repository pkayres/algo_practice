// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str){
  let charMap ={};
  let max = 0;
  let letter = "";

  for(let character of str){
    if (charMap[character]){
      charMap[character]++;
    }
    else {
      charMap[character] = 1;
    }
  }

  for(let character in charMap){
    if (charMap[character] > max) {
      max = charMap[character]
      letter = character
    }
  }
return letter;

}

maxChar("abcccccccd");



// build a hash map
// take the string create a loop, push into the map
// create the map with key value pairs keeping track of number of times the character occurs
// finally loop through the map and find the pair with the highest amount of occurences
// return the letter with hightest amount of occurences

//Remember that (for...of) is only used with array's and strings, (for...in) alternativley is used with objects.



module.exports = maxChar;
