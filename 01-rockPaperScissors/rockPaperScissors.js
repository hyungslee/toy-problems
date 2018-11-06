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

var rockPaperScissors = function(num) {
  // TODO: your solution here
  var rps = ["rook", "paper", "scissors"];

  var result = [];

  var collect = [];
  //   for (var i = 0; i < num; i++) {
  //     collect.push(rps[i]);
  //     for (var j = 0; j < num; j++) {
  //       collect.push(rps[j]);
  //       for (var k = 0; k < num; k++) {
  //         collect.push(rps[k]);
  //       }
  //     }
  //   }
  result.push(collect);
  //   for (var i = 0; i < num; i++) {
  //     let maker = [];

  //     for (var j = 0; j < num; j++) {
  //       for (var k = 0; k < num; k++) {
  //         maker.push(rPs[i]);
  //         maker.push(rPs[j]);
  //         maker.push(rPs[k]);
  //         result.push(maker);
  //       }
  //     }
  //   }
  return result;
};
