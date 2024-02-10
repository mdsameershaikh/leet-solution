// Bismillah;

var once = function (fn) {
  let calls = 0;

  return function (...args) {
    if (calls == 0) {
      calls++;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};
