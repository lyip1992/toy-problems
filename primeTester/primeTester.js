/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

 var primeTester = function(n){
   if( typeof n !== 'number' || n < 1 || n % 1 !== 0 ){ // n isn't a number or n is less than 1 or n is not an integer
     return false;
   }

   var upperLimit = Math.sqrt(Math.abs(n));

   if( n === 1 ){ // `1` is not prime
     return false;
   }

   for( var i = 2; i <= upperLimit; i++ ){
     if( n % i === 0 ){
       return false;
     }
   }

   return true;
 };

 /* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive). If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
  */

 var primeSieve = function(start, end){
   var current = 2;
   var primes = range(0, end + 1);

   while( current < end ){ // While we haven't found all the primes.
     for( var i = current + current; i <= end; i += current ){ // mark all multiples of current as not prime
       primes[i] = null; // null means not prime, a number means prime
     }
     do { // find the next current
       current += 1; // Advance current at least once
     } while (!primes[current] && current <= end); // Then continue to advance it until we hit a prime number or we are out of range.
   }
   return primes.slice(2).filter(function(val){ return val && val >= start; }); // Filter out all values that aren't prime and aren't in our range.
 };

 var range = function(start, end){
   var result = [];
   for( var i = start; i < end; i++ ){
     result.push(i);
   }
   return result;
 };
