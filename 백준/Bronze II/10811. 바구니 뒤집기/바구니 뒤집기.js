let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [cnt, line] = input[0].split(' ').map(Number);
let baskets = Array.from({ length: cnt }, (_, idx) => idx + 1);

for (let k = 1; k <= line; k++) {
  const [i, j] = input[k].split(' ').map(Number);

  let reversed = baskets.slice(i - 1, j).reverse();

  baskets.splice(i - 1, reversed.length, ...reversed);
}

console.log(baskets.join(' '));