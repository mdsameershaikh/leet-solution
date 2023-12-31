let arr = [1, 5, 5, 5, 5];

var uniqueOccurrences = function (arr) {
  let uniqObj = {};
  let kw = [];
  let newKw = [];
  let state = true;
  for (let i = 0; i < arr.length; i++) {
    if (!uniqObj.hasOwnProperty(arr[i])) {
      uniqObj[arr[i]] = 1;
    } else {
      uniqObj[arr[i]] += 1;
    }
  }

  kw = Object.values(uniqObj);
  for (let i = 0; i < kw.length; i++) {
    if (newKw.includes(kw[i])) {
      state = false;
      return state;
    } else {
      newKw.push(kw[i]);
    }
  }
  return state;
};

console.log(uniqueOccurrences(arr));
