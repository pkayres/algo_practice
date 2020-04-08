// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//

function reverse(str){
  return str.split("").reverse().join("")
}

reverse('asdf')
module.exports = reverse;

//
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed
// }
// for...of takes in a variable and an iterible. The reason this reverses is cause it's a for loop that is taking each letter and then passing it into the empty reversed variable.
