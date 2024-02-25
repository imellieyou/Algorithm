let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let waitingTimes = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < waitingTimes.length; i++) {
  let arr = waitingTimes.slice(0, i + 1);

  result += arr.reduce((acc, cur) => acc + cur);
}

console.log(result);