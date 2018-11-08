/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function (array) {
  // Your code here

  // var resultNum = 0;
  // for (var i = 0; i < this.arr.length; i++) {
  //   console.log(this.arr.length);
  //   for (var j = 0; j < this.arr.length; j++) {
  //     if (this.arr[i] === array[j]) {
  //       console.log(this.arr[i]);
  //       resultNum++;
  //     }
  //   }
  // }
  // if (resultNum === this.arr.length) {
  //   return true;
  // }
  // return false;

  var Obj = {}
  // console.log(this)
  for (var i = 0; i < this.length; i++) {
    Obj[this[i]] = this[i]
  }
  for (var key in Obj) {
    if (array.includes(Obj[key]) !== true) {
      return false
    }
  }
  return true
}
