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

var commonCharacters = function(string1, string2) {
  var string2Chars = {};
  var output = "";
  for (var letter of string2) {
    if (letter !== " ") {
      string2Chars[letter] = true;
    }
  }
  for (var letter of string1) {
    if (string2Chars[letter]) {
      output += letter;
      string2Chars[letter] = false;
    }
  }
  return output;
};
commonCharacters("qwerty", "wertyu", "ertyui", "rtyui", "tyuiop", "yuiopa");
