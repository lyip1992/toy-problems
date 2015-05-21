/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  
  var checked = {};
  var counter;

  for( var i = 0; i < arr.length; i++ ) {
  	
  	counter = 0;
  	if( !checked[i] ) {
	  
	  checked[i] = i;

      for ( var k = i + 1; k < arr.length; k++)
	  if( arr[i] === arr[k]) counter++;
	    
	  if( counter !== 0 && counter % 2 === 0) return arr[i];
    }

  }

  return null;

};

// what is our input and output
// what are our edge cases

// THIS IS THE CORRECT ANSWER

// var evenOccurrence = function(arr) {
//   var counter = {}, i;

//   for( i = 0; i < arr.length; i++)
//     counter[arr[i]] = !counter[arr[i]];

//   for( i = 0; i < arr.length; i++)
//     if (!counter[arr[i]]) return arr[i];

//   return null;
// };











