// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//regex solution
function vowels(str){
  const match = str.match(/[aeiou]/gi);

  return match ? match.length : 0;
}

//iterative solution 1
function vowels(str){
 let count = 0;
 const check = ["a","e", "i", "o","u"];
 for(let letters of str.toLowerCase()){
   if(check.includes(letters)){
     count++;
   }
 }
 return count;
}

//iterative solution 2
function vowels(str){
  let count = 0;
  for(let letter of str){
    if (letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "u") {
          count++;
        }
  }
  return count;
}

module.exports = vowels;
