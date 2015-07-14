/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  var results = {};
  var stringResult = '';

  for( var i = 0; i < string1.length; i++ ){
    if( string1[i] !== ' ' && results[i] === undefined && string2.indexOf(string1[i]) !== -1 ){
      results[string1[i]] = string1[i];
    }
  }

  for( var key in results ){
    stringResult += results[key];
  }

  return stringResult;
};
