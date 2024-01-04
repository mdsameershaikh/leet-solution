/// 1470. Shuffle the Array
let newArr = [];
let nums = [2, 5, 1, 3, 4, 7];
var shuffle = function (nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }
  return res;
};

shuffle(nums, 3);
