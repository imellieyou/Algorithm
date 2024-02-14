let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let remain = input.map((num) => num % 42);

console.log(new Set(remain).size);
