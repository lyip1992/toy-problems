/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var duplicateTracker = {};

  for( var i = 0; i < string.length; i++ ){
    if( duplicateTracker[string[i]] === undefined ){
      duplicateTracker[string[i]] = true;
    } else {
      duplicateTracker[string[i]] = false;
    }
  }

  for( var key in duplicateTracker ){
    if( duplicateTracker[key] ){
      return key;
    }
  }

  return null;
};
