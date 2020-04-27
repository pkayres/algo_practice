// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// iterative solution

function fib(num){
  const fibArr = [0,1];

  for(let i = 2; i <= num; i++){
    const a = fibArr[i - 1];
    const b = fibArr[i - 2];

    fibArr.push(a + b)
  }
  return fibArr[fibArr.length-1]
}



module.exports = fib;