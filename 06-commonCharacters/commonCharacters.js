/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function (string1, string2) {
  // TODO: Your code here!
  var result = ''
  var stringOne = string1.split('')
  var stringTwo = string2.split('')

  // console.log(stringOne, stringTwo)
  for (var i = 0; i < stringOne.length; i++) {
    for (var j = 0; j < stringTwo.length; j++) {
      if (stringOne[i] === stringTwo[j]) {
        result += stringOne[i]
      }
    }
  }

  return result
}
