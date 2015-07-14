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

var commonCharacters = function(string) {
  var strings = Array.prototype.slice.call(arguments, 1);
  var results = {};
  var stringResult = '';

  for( var i = 0; i < string.length; i++ ){
    var yes = false;
    var failed = false;

    for( var j = 0; j < strings.length; j++ ){
      if( string[i] !== ' ' && results[i] === undefined && strings[j].indexOf(string[i]) !== -1 ){
        yes = true;
      } else {
        yes = false;
        failed = true;
      }
    }

    if( yes && !failed ){
      results[string[i]] = string[i];
    }
  }

  for( var key in results ){
    stringResult += results[key];
  }

  return stringResult;
};
