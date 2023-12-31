const nums = [0, 0, 0, 1, 1, 2, 2, 2, 3];

// this one is incorrect implementation
// var removeDuplicates = function (nums) {
//   let uniqueArr = [];
//   nums.reduce((accumulator, currentValue) => {
//     if (accumulator !== currentValue) {
//       uniqueArr.push(currentValue);
//     }
//     return (accumulator = currentValue);
//   }, nums[0] - 1);

//   return uniqueArr.length;
// };

var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index] = nums[i + 1];
      index++;
    }
  }
  return index;
};
