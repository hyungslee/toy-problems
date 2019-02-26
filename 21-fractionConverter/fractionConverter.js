/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  let numArr = Math.abs(number)
    .toString()
    .split(".");
  if (numArr.length === 1) {
    return number + "/1";
  }
  numArr[2] = 10 ** numArr[1].length;
  numArr = numArr.map(str => Number(str));

  const factor = function(num, denom) {
    let common;
    if (denom % num === 0) {
      common = num;
    } else {
      let i = Math.ceil(num / 2);
      while (!common) {
        common = num % i === 0 && denom % i === 0 ? i : null;
        i--;
      }
    }
    return common === 1 ? [num, denom] : factor(num / common, denom / common);
  };

  let reduced = factor(numArr[1], numArr[2]);
  let answer =
    numArr[0] > 0
      ? `${numArr[0] * reduced[1] + reduced[0]}/${reduced[1]}`
      : `${reduced[0]}/${reduced[1]}`;
  return number > 0 ? answer : "-" + answer;
};
