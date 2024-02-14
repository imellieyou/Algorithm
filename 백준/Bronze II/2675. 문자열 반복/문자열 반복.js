let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const line = Number(input[0]);

let result = '';

for (let i = 1; i <= line; i++) {
  const [repeatCnt, str] = input[i].split(' ');
  for (let j = 0; j < str.length; j++) {
    result += str[j].repeat(Number(repeatCnt));
  }

  result += '\n';
}

console.log(result);