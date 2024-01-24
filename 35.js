//35. Search Insert Position
let data = [1, 2, 4, 6, 8];
var serchInsert = function (nums, target) {
  let indexOfTarget = nums.indexOf(target);
  if (indexOfTarget !== -1) {
    return indexOfTarget;
  } else if (nums.findIndex((item) => item > target) !== -1) {
    return nums.findIndex((item) => item > target);
  } else {
    return nums.length;
  }
};

console.log(serchInsert([1, 3, 5, 6], 7));
