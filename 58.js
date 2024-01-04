// 58. Length of Last Word
let s = "   fly me   to   the moon  ";

var lengthOfLastWord = function (s) {
  let wordsToarr = s.trim().split(" ");
  return wordsToarr[wordsToarr.length - 1].length;
};
console.log(lengthOfLastWord(s));
