let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [h, m] = input[0].split(' ').map(Number);
let cookTime = parseInt(input[1]);

h = m + cookTime >= 60 ? h + Math.floor((m + cookTime) / 60) : h;
if (h >= 24) h = h - 24;
m = (m + cookTime) % 60;

console.log(h, m);
