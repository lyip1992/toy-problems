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


var multiply = function(x, y){
  if( x === 0 || y === 0 ){ // One is negative
    return 0;
  }

  if( x < 0 ^ y < 0 ){ // Both are negative
    return -multiply(Math.abs(x), Math.abs(y));
  } else if( x < 0 && y < 0 ){
    return multiply(Math.abs(x), Math.abs(y));
  }

  var xStr = x.toString().split('.'); // Neither is negative
  var yStr = y.toString().split('.');
  var decimals = ( (xStr[1] || '') + (yStr[1] || '') ).length;

  var myX = parseInt(xStr[0] + xStr[1], 10);
  var myY = parseInt(yStr[0] + yStr[1], 10);

  var counter = myY;
  var total = 0;
  while( counter-- ){
    total += myX;
  }

  if( decimals === 0 ){ // Skip decimal handling if not needed
    return total;
  }

  total = total.toString().split('');

  if( decimals > total.length ){ // Insert the decimal at proper place, as recorded before multiplication
    var pack = [];
    for( var i = 0; i < decimals - total.length; i++ ){
      pack.push(0);
    }
    total = pack.concat(total);
  }

  total.splice(total.length - decimals, 0, '.');
  return parseFloat( total.join('') );
};

var divide = function(x, y){
  var recursiveDiv = function(x, y, place){
    if( x === 0 ){
      return 0;
    }
    var remainder = x;
    var dividend = 0;

    while( remainder >= y ){
      remainder -= y;
      dividend++;
    }

    if( place > 3 ){ // Getting a bit long in the decimal, let's stop here and signify whether we should round
      return dividend >= 5;
    }

    var remainderDiv = recursiveDiv( multiply(remainder, 10), y, place + 1 ); // Recursively divide the next decimal place
    if( typeof remainderDiv === "boolean" ){ // If we stopped in the lower stack call, let's round (or not) and return
      return dividend + Number(remainderDiv);
    }
    var divInt = parseFloat( '0.' + remainderDiv.toString().replace(".","") ); // Remove decimal from remainder dividend and append all behind decimal
    return dividend + divInt; // Append to current dividend and return
  };

  if( x < 0 ^ y < 0 ){ // One is negative
    return -recursiveDiv(Math.abs(x), Math.abs(y), 0);
  } else if( x < 0 && y < 0 ){ // Both are negative
    return recursiveDiv(Math.abs(x), Math.abs(y), 0);
  } else { // Neither is negative
    return recursiveDiv(x, y, 0);
  }
};

var modulo = function(x, y){
  var remainder;
  if( x < 0 ){
    remainder = Math.abs(x);
  } else {
    remainder = x;
  }

  if( y < 0 ){
    y = -y;
  }

  while( remainder >= y ){
    remainder -= y;
  }

  if( x < 0 ){
    return -remainder;
  } else {
    return remainder;
  }

  return remainder;
};
