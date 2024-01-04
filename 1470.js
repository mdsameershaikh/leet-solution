/// 1470. Shuffle the Array
let newArr = [];
let nums = [2, 5, 1, 3, 4, 7];
// var shuffle = function (nums, n) {
//   let res = [];
//   for (let i = 0; i < n; i++) {
//     res.push(nums[i], nums[n + i]);
//   }
//   return res;
// };
var shuffle = function (nums, n) {
  if (nums.length > n) {
    return [nums[0], nums[n], ...shuffle(nums.slice(1), n)];
  } else {
    return [];
  }
};

console.log(shuffle(nums, 3));
