let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let subjectCnt = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let max = Math.max(...scores);

let newScores = scores.map((el) => (el / max) * 100);
let result = newScores.reduce((acc, cur) => acc + cur) / subjectCnt;

console.log(result);