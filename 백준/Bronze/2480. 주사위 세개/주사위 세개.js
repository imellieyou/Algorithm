let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let same = input.find((el, idx) => input.indexOf(el) !== idx);
// input 중에서 same 제외하고 count
let sameCnt = input.filter((el, idx) => input.indexOf(el) !== idx).length;

switch (sameCnt) {
  case 0:
    console.log(Math.max(...input) * 100);
    break;
  case 1:
    console.log(1000 + same * 100);
    break;
  case 2:
    console.log(10000 + same * 1000);
    break;
}