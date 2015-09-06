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

var rockPaperScissors = function(n, results, round) {
  results = results || [];
  round = round || [];
  var choices = ['rock', 'paper', 'scissors'];

  if( n === 0 ){
    return results.push(round.slice());
  }

  for( var i = 0; i < 3; i++ ){
    round.push(choices[i]);
    rockPaperScissors(n - 1, results, round);
    round.pop();
  }
  return results;
};
