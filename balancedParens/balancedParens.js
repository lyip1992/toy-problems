/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  var leftParenCounter = 0;
  var rightParenCounter = 0;

  for( var i = 0; i < Math.floor(input.length / 2) + 1; i++ ){
    if( input[i] === '(' ){ leftParenCounter++; }
  }

  for( var j = input.length - 1; j > Math.floor(input.length / 2) - 1; j-- ){
    if( input[j] === ')' ){ rightParenCounter++; }
  }

  return leftParenCounter === rightParenCounter;
};
