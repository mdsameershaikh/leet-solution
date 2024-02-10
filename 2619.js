// Bismillah;
// 2619. Array Prototype Last

Array.prototype.last = function () {
  let len = this.length;

  if (len > 0) {
    return this[len - 1];
  } else {
    return -1;
  }
};
let arr = [null];
console.log(arr.last());
