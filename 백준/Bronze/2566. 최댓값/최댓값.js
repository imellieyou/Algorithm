let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;
let idx = '';

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map(Number);

  for (let j = 0; j < arr.length; j++) {
      // '<'에서 '<='로 수정
    if (max <= arr[j]) {
      max = arr[j];
      idx = `${i + 1} ${j + 1}`;
    }
  }
}

console.log(max + '\n' + idx);
