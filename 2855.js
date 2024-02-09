// Bismillah;
//2855. Minimum Right Shifts to Sort the Array

var minimumRightShifts = function (nums) {
  let minIndex = 0;
  let minVal = nums[0];
  function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  if (isArraySorted(nums)) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minVal) {
      minIndex = i;
      minVal = nums[i];
    }
  }
  let replace = JSON.stringify(nums.slice(minIndex));
  nums.splice(minIndex, nums.length - minIndex);
  nums.unshift(...JSON.parse(replace));
  if (isArraySorted(nums)) {
    return nums.length - minIndex;
  } else {
    return -1;
  }
};

console.log(minimumRightShifts([3, 4, 5, 1, 2]));
