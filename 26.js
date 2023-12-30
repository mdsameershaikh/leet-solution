const nums = [1, 1, 2];
var removeDuplicates = function (nums) {
  let uniqueArr = [];
  nums.reduce((accumulator, currentValue) => {
    if (accumulator !== currentValue) {
      uniqueArr.push(currentValue);
    }
    return (accumulator = currentValue);
  }, nums[0] - 1);

  return uniqueArr;
};

console.log(removeDuplicates(nums));
