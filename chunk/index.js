// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]


function chunk(array, size) {
  //First we create a new array so that we can create new subarray's
  const newArr = [];
  //Then we iterate through array argument
    for (let element of array){
      // Then we create variable that will access last element of new array
      const last = newArr[newArr.length - 1];
      // Then we create conditional that will access if element in new array exsists, and if it's equal to length of the size argument given
      if (!last || last.length === size){
        // If it doesn't exsist or is the lenght we create new subarray
        newArr.push([element])
      } else {
        //If it does exsist and is not the length then we push element in array
        last.push(element)
      }
    }
    //finally return array.
  return newArr
}

module.exports = chunk;
