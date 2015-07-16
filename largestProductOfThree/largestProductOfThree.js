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

  var result1 = sortedArray[array.length - 1];
  var result2 = result1;

  for( var i = array.length - 2; i > array.length - 4; i-- ){
    if( sortedArray[i] !== undefined ){
      result1 *= sortedArray[i];
    }
  }

  for( var j = 0; j < 2; j++ ){
    if( sortedArray[j] !== undefined ){
      result2 *= sortedArray[j];
    }
  }

  return result1 >= result2 ? result1 : result2;
};
