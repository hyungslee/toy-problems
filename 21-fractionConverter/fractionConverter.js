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
  var result = "";
  var count = 0;
  var a, b;

  if (!Number.isInteger(number)) {
    count = count + 1;
    number = number * 10;
    toFraction(number);
  } else {
    a = number;
    b = Math.pow(10, count);
    result = `${a}/${b}`;
  }

  return result;
};
