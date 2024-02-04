var maximumWealth = function (accounts) {
  let sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    let tempSum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      tempSum += accounts[i][j];
    }
    if (tempSum > sum) {
      sum = tempSum;
    }
  }
  return sum;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
