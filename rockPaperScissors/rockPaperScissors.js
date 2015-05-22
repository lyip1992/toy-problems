/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function(n) {
  
  n = n || 3;
  var plays = ['rock', 'paper', 'scissors'];
  var results = [];

  var traverse = function(roundsLeft, played) {
    //base
    if( roundsLeft === 0 ) {
      results.push(played);
      return;
    }
  	
  	//recurse
  	for( var i = 0; i < plays.length; i++ ){
  	  var currentPlay = plays[i];
  	  traverse(roundsLeft - 1, played.concat(currentPlay));
  	}
  };

  traverse( n, [] );

  return results;
};