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
  var objectifiedString = objectify(string);
  var otherStrings = Array.prototype.slice.call(arguments, 1);
  var result = '';

  for( var j = 0; j < otherStrings.length; j++ ){
    for( var i = 0; i < string.length; i++ ){
      if( otherStrings[j].indexOf(string[i]) === -1 ){
        objectifiedString[string[i]] = false;
      }
    }
  }

  for( var k = 0; k < string.length; k++ ){
    if( objectifiedString[string[k]] ){
      result += string[k];
    }
  }

  return result;
};

var objectify = function(string){
  var obj = {};

  for( var i = 0; i < string.length; i++ ){
    if( string[i] !== ' ' ){
      obj[string[i]] = true;
    }
  }

  return obj;
};
