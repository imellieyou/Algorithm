let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let sorted = input.sort((a, b) => a - b);

// 수가 세 개로 고정되어 있으므로.
console.log(sorted[1]);
