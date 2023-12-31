var arr = [1, 2, 1];
var getConcatenation = function (nums) {
  let ans = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    ans[i] = nums[i];
    ans[len + i] = nums[i];
  }
  return ans;
};

console.log(getConcatenation(arr));
