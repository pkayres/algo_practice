// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

  // Use for loop iterate from our given integer starting from 1
  // If we hit and integer that is divisible by 3 then we want to return "fizz"
  // If we hit an integer that is divisable by 5 we want to return the string "buzz"
  // If we hit an integer that is divisiable by 3 and 5 we want to return the string "fizzbuzz"



  function fizzBuzz(num){
    for (let i = 1; i <= num; i++){
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
      }
      else if (i % 3 === 0) {
        console.log("fizz")
      }
      else if (i % 5 === 0) {
        console.log("buzz")
      }
      else {
        console.log(i)
      }
    }
  }

fizzBuzz(15)
module.exports = fizzBuzz;
