/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function (str) {
  var splitStr = str.split('')
  var result = ['']

  for (var i = 0; i < splitStr.length; i++) {
    result.push(splitStr[i])
  }
  var len = result.length
  for (var i = 1; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      result.push(result[i] + result[j])
    }
  }
  console.log(result)

  return result
}
