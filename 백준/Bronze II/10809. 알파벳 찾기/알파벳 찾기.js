let input = require('fs').readFileSync('/dev/stdin').toString().trim()

let result = Array.from({ length: 26 }).fill(-1);

for (let i = 0; i < input.length; i++) {
  let index = input[i].charCodeAt(0) - 97;

  // 처음 나온 index를 반영(ex. baekjoon에서 'oo')
  if(result[index] === -1) result.splice(index, 1, i);
}

console.log(result.join(' '));