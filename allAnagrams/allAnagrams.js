/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var anagrams = function(str, ana, output){
  output = output || {};
  ana = ana || '';

  if( str === '' ){ output[ana] = 1; }
  for( var i = 0; i < str.length; i++ ){
    anagrams(str.slice(0, i) + str.slice(i + 1), ana + str[i], output);
  }

  return Object.keys(output);
};
