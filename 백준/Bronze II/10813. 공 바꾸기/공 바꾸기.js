let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [cnt, line] = input[0].split(' ').map(Number);
let baskets = Array.from({ length: cnt }, (_, idx) => idx + 1);

for (let k = 1; k <= line; k++) {
  const [i, j] = input[k].split(' ').map(Number);

  [baskets[i - 1], baskets[j - 1]] = [baskets[j - 1], baskets[i - 1]];
}

console.log(baskets.join(' '));