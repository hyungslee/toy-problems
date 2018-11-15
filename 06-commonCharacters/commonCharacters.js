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

var commonCharacters = function (...args) {
  // TODO: Your code here!
  // var args = Array.prototype.slice.call(arguments)

  // var stringOne = string1.split('')
  // var stringTwo = string2.split('')

  // console.log(stringOne, stringTwo)
  // for (var i = 0; i < stringOne.length; i++) {
  //   for (var j = 0; j < stringTwo.length; j++) {
  //     if (stringOne[i] === stringTwo[j]) {
  //       result += stringOne[i]
  //     }
  //   }
  // }
  var result = args[0]
  var reresult = ''

  for (var i = 1; i < args.length; i++) {
    var firstArgs = result.split('')
    var secondArgs = args[i].split('')
    for (var j = 0; j < firstArgs.length; j++) {
      for (var k = 0; k < secondArgs.length; k++) {
        if (firstArgs[j] === secondArgs[k]) {
          reresult += firstArgs[j]
          result = reresult
          reresult = ''
        }
      }
    }
  }
  console.log(reresult)

  return result
}
commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa')
