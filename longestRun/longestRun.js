/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string){
  if( string.length === 0 ){ return [ 0, 0 ]; }

  var overallCount = 0;
  var overallIndex1, overallIndex2;
  var count = 0;
  var current, index1, index2;

  for( var i = 0; i < string.length; i++ ){
    var char = string[i];

    if( char !== current ){
      if( count > overallCount ){
        overallCount = count;
        overallIndex1 = index1;
        overallIndex2 = index2;
        index1 = i;
        index2 = i;
        count = 1;
        current = char;
      } else {
        index1 = i;
        index2 = i;
        count = 1;
        current = char;
      }
    } else {
      count++;
      index2 = i;
    }
  }

  return [ overallIndex1, overallIndex2 ];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
