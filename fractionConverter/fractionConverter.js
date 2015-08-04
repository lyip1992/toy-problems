/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '5/10'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '30/10'
 *
 * Example: toFraction(2.5) === '25/10'
 *
 * Example: toFraction(2.2) === '22/10'
 *
 * Example: toFraction(2.3) === '23/10'
 *
 */

var toFraction = function(number) {

  var whole = Math.floor(number);
  var decimal = number - whole;
  var decimalMod = decimal;
  var tens = 0;

  // how many times to i have to multiply my decimal by 10 before i get to  >= 1?
  if( decimal !== 0 ){
    tens++;
  } else {
    while( decimalMod < 1 ){
      tens++;
      decimalMod *= 10;
    }
  }

  // start cacheing our numbers and turn them into strings
  var numerator = number * tens * 10;
  var denominator = tens * 10;

  // now how do we simplify our number?
  // we could keep dividing by 5 and two until we get our simplified fraction


  return numerator + '/' + denominator;

};
