let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let total = parseInt(input[0]);
const count = parseInt(input[1]);

for(let i = 2; i < 2 + count; i++) {
  const price = parseInt(input[i].split(' ')[0]);
  const cnt = parseInt(input[i].split(' ')[1]);

  total -= (price * cnt);
}

console.log(total ? 'No' : 'Yes');

