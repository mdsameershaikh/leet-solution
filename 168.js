var convertToTitle = function (columnNumber) {
  if (columnNumber <= 26) {
    return String.fromCharCode("A".charCodeAt(0) + columnNumber - 1);
  } else {
    // if the value is greater than 26
    let firstChar = String.fromCharCode(
      "A".charCodeAt(0) + Math.trunc(columnNumber / 26) - 1
    );
    let lastChar = String.fromCharCode(
      "A".charCodeAt(0) + Math.trunc(columnNumber % 26) - 1
    );
    return firstChar + lastChar;
    // here we are going to breakdown it in 2 parts
    // 1) get the last char by using mod operator num % 26 == last num
    // 2) get the first char by divding num/26
  }
};

console.log(convertToTitle(701));
