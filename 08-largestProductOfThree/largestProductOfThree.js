/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  // TODO: everything
  var result = [];

  var sortArr = array.sort(function(a, b) {
    return a - b;
  });

  result.push(sortArr[0] * sortArr[1] * sortArr[2]);
  result.push(sortArr[0] * sortArr[1] * sortArr[sortArr.length - 1]);
  result.push(
    sortArr[0] * sortArr[sortArr.length - 2] * sortArr[sortArr.length - 1]
  );
  result.push(
    sortArr[sortArr.length - 3] *
      sortArr[sortArr.length - 2] *
      sortArr[sortArr.length - 1]
  );

  var result = result.sort(function(a, b) {
    return b - a;
  });

  return result[0];
};
