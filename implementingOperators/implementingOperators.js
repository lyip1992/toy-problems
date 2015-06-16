// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) { // done
  if( y === 0 ) return 0;
  return x += multiply(x, y - 1);
};

var divide = function(x, y) { // done
  var count = 0;

  while( x >= y ) {
    count += 1;
    x -= y;
  }

  return count;
};

var modulo = function(x, y) { // done
  if( x === 0 ) return 0;
  if( x < y ) return x;
  return modulo(x - y, y);
};
