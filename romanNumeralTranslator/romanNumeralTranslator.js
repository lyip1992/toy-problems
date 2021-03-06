
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral, result){
  if( typeof romanNumeral !== 'string' ) return null;
  if( romanNumeral.length === 0 ) return 0;

  result = result || 0;
  var currentRN = DIGIT_VALUES[romanNumeral[0]];
  var nextRN = DIGIT_VALUES[romanNumeral[1]];

  if( nextRN === undefined ) {
    result += currentRN;
    return result;
  } else if( currentRN >= nextRN ) {
    result += currentRN;
    return translateRomanNumeral(romanNumeral.substr(1), result);
  } else if( currentRN < nextRN ) {
    result -= currentRN;
    return translateRomanNumeral(romanNumeral.substr(1), result);
  }

};
