let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let sorted = input.slice(1).sort((a, b) => a - b);

for (let i = 0; i < sorted.length; i++) {
  console.log(sorted[i]);
}