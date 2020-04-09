// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string) {
  const newSentence = [];

  for(let word of string.split(' ')) {
    newSentence.push(word[0].toUpperCase() + word.slice(1))
  }

  return newSentence.join(" ")
}

capitalize("the lazy monkey")

























// function capitalize(str) {
//   const arr = [];
//   let words = str.split(' ');
//     for(let word of words ){
//       let newWord = word[0].toUpperCase() + word.slice(1);
//       arr.push(newWord) ;
//     }
//
//   return  arr.join(' ')
// }



module.exports = capitalize;
