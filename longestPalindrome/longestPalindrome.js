/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function(str) {
  var result = '';

  for( var i = 0; i < str.length; i++ ) {
    var oddPal = centeredPalindrome(str, i - 1, i + 1);
    var evenPal = centeredPalindrome(str, i, i + 1);

    if( oddPal.length > result.length ) { result = oddPal; }
    if( evenPal.length > result.length ) { result = evenPal; }
  }

  return result;
};

var centeredPalindrome = function(str, left, right) {
  while( left >= 0 && right < str.length && str[left] === str[right] ) {
    left--;
    right++;
  }

  return str.slice(left + 1, right);
};
