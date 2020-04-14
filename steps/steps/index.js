// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// From 0 to n (iterate through rows)
// Create an empty string "stair"
// from 0 to n (iterate through column)
//If the current column is equal to or less tahn the current row add a "#" to stair
// else
// add a space to "stair"
// console.log "stair"

//iterative

function steps(n){
  for(let row = 0; row < n; row++){
  // console.log(row, "i'm row")
    let stair = "";
    for (let column = 0; column < n; column++){
      // console.log(column, "i'm column")
      if(column <= row){
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair)
  }
}

//recursive

function steps(n, row = 0, stair = ''){
  //base case
  if (n === row) {
    return;
  }

  if (n === stair.length){
    console.log(stair);
    steps(n, row + 1);
    return;
  }

  if (stair.length <= row){
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair)
}








module.exports = steps;
