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

var allAnagrams = function(string) {

  var dictionary = {};
  var stringSet;

  for( var i = 0; i < string.length; i++ ) {
    var temp = stringSet[0];
    stringSet[0] = stringSet[i];
    stringSet[i] = temp;
    dictionary[stringSet] = stringSet;
  }

  

  // spliceString = spliceString || string;
  // var result = [];
  // var anagrams = [];
  //
  // for( var i = 0; i < spliceString.length; i++ ) {
  //   anagrams.push(spliceString[i]);
  //   result.concat(allAnagrams(string, spliceString.splice(i, 1)));
  // }
  //
  // return result;
};
