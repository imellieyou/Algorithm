let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let str = '';
// 가장 긴 문자열의 길이 찾기 (짧은 문장은 없는대로 지나치고, 긴 문장은 끝까지 돌기 때문)
let maxLength = Math.max(...input.map(line => line.length));

// 외부는 가장 긴 문자열의 길이만큼 돌기
for (let i = 0; i < maxLength; i++) {
    // 내부는 입력값의 각 줄을 돌기
  for (let j = 0; j < input.length; j++) {
    /*
     현재 줄에 문자가 존재하는지 확인 
     i는 가장 긴 문자열의 인덱스이므로,
     현재 문자(input[j])의 길이 < 인덱스(i)가 되면 현재 문자의 길이가 짧다는 뜻이므로 추가 x 
    */
    if (i < input[j].length) {
      str += input[j][i]; // 해당 위치의 문자를 추가
    }
  }
}

console.log(str);