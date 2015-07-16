/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array){

  var sortedArray = array.sort(function(a, b){
    return a - b;
  });

  var result = sortedArray[array.length - 1];

  for( var i = array.length - 2; i > array.length - 4; i-- ){
    result *= sortedArray[i];
  }

  return result;
};
