let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const target = input[1].split('').map(Number);

console.log(target.reduce((acc, cur) => acc + cur));