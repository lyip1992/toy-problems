/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) { // from solution lecture
  
  var letter, result = [], frequencies = {}, i;

  for( i = 0;  i < string.length; i++ ) {
    letter = string.charAt(i);
    frequencies[letter] = frequencies[letter] || 0;
    frequencies[letter]++;
  }

  for( var letter in frequencies ) {
    result.push( [letter, frequencies[letter]] );
  }

  result.sort(function(a, b) {
    if( a[1] > b[1] ) return -1;
    else if( a[1] < b[1] ) return 1;
    else if( a[0] < b[0] ) return -1;
    else if( a[0] > b[0] ) return 1;
    return 0;
  });

  return result;
};










