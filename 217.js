var containsDuplicate = function (nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (newArr.includes(nums[i])) {
      return true;
    } else {
      newArr.push(nums[i]);
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj.hasOwnProperty(nums[i])) {
      return true;
    } else {
      obj[nums[i]] = nums[i];
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  nums = nums.sort((a, b) => {
    return a - b;
  });
  return nums.some((el, i) => {
    return el == nums[i + 1];
  });
};

var containsDuplicate = function (nums) {
  return nums.length !== new Set(nums).size;
};
console.log(containsDuplicate([1, 2, 3, 1]));
