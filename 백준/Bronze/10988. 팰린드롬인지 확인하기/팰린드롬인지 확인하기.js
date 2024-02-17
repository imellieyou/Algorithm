let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let reversed = input.split('').reverse().join('');
let result = reversed === input ? 1 : 0;

console.log(result);