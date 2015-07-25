/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function(array, target, current){
  current = current || 0;
  var midpoint = Math.floor(array.length / 2);

  if( array.length === 1 ){
    if( array[0] === target ){ return current; }
    else { return null; }
  }

  if( array[midpoint] === target ){
    return current + midpoint;
  } else if( target < array[midpoint] ){
    return binarySearch(array.slice(0, midpoint), target, current);
  } else {
    return binarySearch(array.slice(midpoint), target, current + midpoint);
  }
};
