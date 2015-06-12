/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function(string) {

	var maxPalinLength = 0;
	var longestPalindrome = null;
	var length = string.length;

	// check all possible sub strings
	for (var i = 0; i < length; i++) {
		for (var j = i + 1; j < length; j++) {
			var len = j - i;
			var curr = string.substring(i, j + 1);
			if (isPalindrome(curr)) {
				if (len > maxPalinLength) {
					longestPalindrome = curr;
					maxPalinLength = len;
				}
			}
		}
	}

	return longestPalindrome;
};

var isPalindrome = function(string) {

	for (var i = 0; i < string.length - 1; i++) {
		if (string.charAt(i) != string.charAt(string.length - 1 - i)) {
			return false;
		}
	}
	return true;
};
