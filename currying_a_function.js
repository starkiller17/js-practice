const sum = (a) => {
  return (b) => {
    return a + b;
  }
};

const currying_sum = a => b => a + b;

// function sum(a, b) {
//   return a + b;
// }

console.log(sum(5) (1));
console.log(currying_sum (4) (2))

// Rewrite the 'sum' function to accept the
//  following arguments instead
// sum(4)(2);
