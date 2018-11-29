/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
var index = 0

var binarySearch = function (array, target) {
  const middle = Math.floor(array.length / 2)
  if (array[middle] === target) {
    return middle + index
  }
  if (array[middle] > target) {
    return binarySearch(array.slice(0, middle), target)
  }
  if (array[middle] < target) {
    index += middle
    return binarySearch(array.slice(middle + 1, array.length), target)
  }
  return null

  //   let minidx = 0
  //   let maxidx = array.length - 1

  //   while (minidx <= maxidx) {
  //     var midIdx = Math.floor((minidx + maxidx) / 2)
  //     if (target === array[midIdx]) {
  //       return midIdx
  //     }

  //     if (array[midIdx] <= array[maxidx]) {
  //       if (target < array[midIdx] || target > array[maxidx]) {
  //         maxidx = midIdx - 1
  //       } else {
  //         minidx = midIdx + 1
  //       }
  //     } else if (array[midIdx] >= array[minidx]) {
  //       if (target > array[midIdx] || target < array[minidx]) {
  //         minidx = midIdx + 1
  //       } else {
  //         maxidx = midIdx - 1
  //       }
  //     }
  //   }
  //   return null
}
