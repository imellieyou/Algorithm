let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const cnt = parseInt(input[0]);

let i = 1;

while (i <= cnt) {
  console.log('*'.repeat(i));
  i++;
}