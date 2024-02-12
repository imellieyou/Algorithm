let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let sorted = input.sort((a, b) => a - b);

console.log(sorted[0] * sorted[2]);