/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function(rotated, target){
  var left = 0;
  var right = rotated.length - 1;

  while( left <= right ){
    var middle = Math.floor((left + right) / 2);

    if( rotated[middle] === target ){ return middle; }

    if( rotated[left] <= rotated[middle] ){
      if( rotated[left] <= target && target < rotated[middle] ){
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if( rotated[middle] < target && target <= rotated[right] ){
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return null;
};
