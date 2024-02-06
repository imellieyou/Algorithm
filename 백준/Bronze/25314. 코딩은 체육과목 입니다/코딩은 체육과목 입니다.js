let input = require('fs').readFileSync('/dev/stdin').toString();

let size = input / 4;
let str = '';

for(let i = 1; i <= size; i++) {
  str += 'long ';

  if(i === size) {
    str += 'int';
    break;
  }
}

console.log(str);