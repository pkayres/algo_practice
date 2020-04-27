// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // iterative solution
//
function fib(num){
  const fibArr = [0,1];

  for(let i = 2; i <= num; i++){

    // this always gets you the last element in array
    const a = fibArr[fibArr.length - 1];
    // this always gets you the second to last element in array
    const b = fibArr[fibArr.length - 2];

    // this pushes the new element into array created by adding the last and second to last element (a+B) together.
    fibArr.push(a + b)
  }
  // finally return the last element in the final array once loop completes
  return fibArr[fibArr.length-1]
}
fib(7)

// recursive solution

function fib(n){

  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}



module.exports = fib;
