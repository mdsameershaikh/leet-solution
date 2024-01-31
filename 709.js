/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let strLen = s.length;
  let lowerCaseString = "";
  for (let i = 0; i < strLen; i++) {
    let decimalvalOfLetter = s.charCodeAt(i);

    if (decimalvalOfLetter >= 65 && decimalvalOfLetter <= 90) {
      // convert to lowercase here
      lowerCaseString += String.fromCharCode(decimalvalOfLetter + 32);
    } else {
      // construct the string as it is
      lowerCaseString += s[i];
    }
  }
  return lowerCaseString;
};

console.log(toLowerCase("SameEr"));
