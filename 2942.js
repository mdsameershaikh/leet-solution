// bismillah
var findWordsContaining = function (words, x) {
  let indices = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] == x) {
        indices.push(i);
        break;
      }
    }
  }
  return indices;
};
console.log(findWordsContaining(["sameer", "is", "nice"], "e"));
