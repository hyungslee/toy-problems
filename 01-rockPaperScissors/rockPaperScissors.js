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

var rockPaperScissors = function(rounds) {
  rounds = rounds || 3;
  var result = [];
  var plays = ["rock", "paper", "scissors"];
  var getResult = function(playedSoFar, roundsLeft) {
    if (roundsLeft === 0) {
      result.push(playedSoFar);
    } else {
      for (var i = 0; i < plays.length; i++) {
        getResult(playedSoFar.concat(plays[i]), roundsLeft - 1);
      }
    }
  };
  getResult([], rounds);
  return result;
};
