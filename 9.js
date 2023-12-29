// var isPalindrome = function (x) {
//   return x == [...x.toString()].reverse().join("");
// };

var isPalindrome = function (x) {
  let numToStr = `${x}`;
  let len = numToStr.length;
  let revcount = len;
  let revStr = "";
  for (let i = 0; i < len; i++) {
    revStr += numToStr[--revcount];
  }
  return revStr == numToStr;
};

console.log(isPalindrome(-1234));
console.log(isPalindrome(1221));
