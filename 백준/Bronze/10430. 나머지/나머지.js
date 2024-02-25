let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [a, b, c] = input.map(Number);

console.log(((a + b) % c) + '\n' + (((a % c) + (b % c)) % c) + '\n' + ((a * b) % c) + '\n' + (((a % c) * (b % c)) % c));