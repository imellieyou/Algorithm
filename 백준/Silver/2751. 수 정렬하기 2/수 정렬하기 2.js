let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

console.log(
  input
    .slice(1)
    .sort((a, b) => a - b)
    .join('\n')
);