let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const cnt = parseInt(input[0]);

for(let i = 1; i <= cnt; i++) {
  console.log('*'.repeat(i));
}
