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

var rockPaperScissors = function() {
  // TODO: your solution here
  var rps = ["rook", "paper", "scissors"];

  var result = [];
  var collect = [];

  for (var i = 0; i < rps.length; i++) {
    for (var j = 0; j < rps.length; j++) {
      for (var k = 0; k < rps.length; k++) {
        collect = [rps[i], rps[j], rps[k]];
        result.push(collect);
      }
    }
  }
  return result;
};
