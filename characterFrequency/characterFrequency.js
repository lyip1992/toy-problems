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


var characterFrequency = function(string) {
  var dictionary = {};
  var secondDictionary = {};
  var numbers = [];
  var letters = [];
  var result = [];

  for( var i = 0; i < string.length; i++ ) {
    if( !dictionary[string[i]] ) dictionary[string[i]] = 1;
    else dictionary[string[i]] += 1;
  }
  
  for( var key in dictionary ) {
    numbers.push(dictionary[key]);
  }

  numbers.sort(function(a, b) { return b - a; });

  // sort by frequency
  for( var i = 0; i < numbers.length; i++ ) {
  	for( var key in dictionary ) {
  	  if( letters.indexOf(key) === -1 && numbers[i] === dictionary[key])
  	  	letters.push(key);
  	}
  }
  
  for( var i = 0; i < letters.length; i++ ) {
  	if( letters[i] > letters[i + 1] && numbers[i] === numbers[i + 1]) {
  	  var temp = letters[i];
  	  letters[i] = letters[i + 1];
  	  letters[i + 1] = temp;
  	}
  }
  // sort by character
  for( var i = 0; i < letters.length; i++ ) {
  	result.push([letters[i], numbers[i]]);
  }

  return result;
};

console.log(characterFrequency('mmmaaaiiibbb'));











