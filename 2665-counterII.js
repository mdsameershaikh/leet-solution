/**
 * Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
 */


var createCounter = function(param) {
   let init = param;
  function increment(){
   return ++init;
  }
  function decrement(){
   return --init;
  }
  function reset(){
    init = param
   return init;
  }
    return {increment ,decrement, reset}
};


  const counter = createCounter(5)
console.log(counter.increment()) // 6 
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
