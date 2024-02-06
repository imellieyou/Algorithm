let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const cnt = parseInt(input[0]);

for(let i = 1; i <= cnt; i++) {
  const A = parseInt(input[i].split(' ')[0]);
  const B = parseInt(input[i].split(' ')[1]);

  console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
}
