/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // the brute force method would be to test for everything under between itself and one
  // this would be one massive for loop
  // at the end we'll have some thing that stars off true and returns false as soon as the modulus gives
  // something that isn't zero

  for( var i = n - 1 ; i > 1; i-- )
  	if( !(n % i) ) return false;

  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  
  var primes = []; 

  for( var i = start; i <= end; i++ ) {
  	if( primeTester(i) ) primes.push(i); 
  }

  return primes;

  // var result = [];
  // var storage = {};

  // for( var i = 2; i <= end; i++) 
  // 	storage[i] = 0;

  // for( var i = 2; i <= end; i++) {
  // 	for( var j = i; j <= end; j * j) {
  // 	  storage[j] += 1
  // 	}
  // }  
  
  // for( var key in storage ) {
  // 	if( storage[key] === 1 key >== start) result.push(key);
  // }

  // return result;
};


