// Bismillah;
//1539. Kth Missing Positive Number
var findKthPositive = function (arr, k) {
  let missingInt = [];
  let arrIndexer = 0;
  for (let i = 1; i < arr.slice(-1)[0] + k + 1 && missingInt.length < k; i++) {
    if (arrIndexer < arr.length) {
      if (i !== arr[arrIndexer]) {
        missingInt.push(i);
      } else {
        arrIndexer++;
      }
    } else {
      missingInt.push(i);
    }
  }
  return missingInt[k - 1];
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
