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

 // brackets can either have nothing inside of them
 // or they need an even amount of brackets inside of them
 // we are going to need three different for loops to check for brackets

 // in step 3 all i need to do is to trim out all of the white space

var balancedParens = function(input){
  var stack = [];
  var pairs = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for( var i = 0; i < input.length; i++ ){
    var char = input[i];

    if( pairs[char] ){
      stack.push(char);
    } else if( char === '}' || char === ']' || char === ')' ){
      if( pairs[stack.pop()] !== char ){
        return false;
      }
    }
  }

  return stack.length === 0;
};
