let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [x, y] = input.map((el) => el.split('').reverse().join(''));

console.log(Math.max(x, y));
