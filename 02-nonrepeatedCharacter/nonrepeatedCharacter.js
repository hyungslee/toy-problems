/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var newString = string.split("").sort();
  var output = null;
  for (var i = 1; i < newString.length - 1; i++) {
    if (
      newString[i - 1] !== newString[i] &&
      newString[i] !== newString[i + 1]
    ) {
      return newString[i];
    }
  }
  return output;
  // var splitString = string.split("");
  // var sortString = splitString.sort();
  // console.log(sortString);
  // var result = null;
  // for (var i = 1; i < sortString.length - 1; i++) {
  //   if (
  //     sortString[i - 1] !== sortString[i] &&
  //     sortString[i] !== sortString[i + 1]
  //   ) {
  //     return sortString[i];
  //   }
  // }
  // return result;
};
