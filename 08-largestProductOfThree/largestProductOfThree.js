/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function (array) {
  // TODO: everything
  var resultArr = []

  var sortArr = array.sort(function (a, b) {
    return a - b
  })

  resultArr.push(sortArr[0] * sortArr[1] * sortArr[2])
  resultArr.push(sortArr[0] * sortArr[1] * sortArr[sortArr.length - 1])
  resultArr.push(
    sortArr[0] * sortArr[sortArr.length - 2] * sortArr[sortArr.length - 1]
  )
  resultArr.push(
    sortArr[sortArr.length - 3] *
      sortArr[sortArr.length - 2] *
      sortArr[sortArr.length - 1]
  )

  var result = resultArr.sort(function (a, b) {
    return b - a
  })

  return result[0]
}
