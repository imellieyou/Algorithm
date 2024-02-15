let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

let result = 0;

for (let i = 0; i < input.length; i++) {
  let time = 2;

  let index = alphabets.indexOf(input[i]);
  let addedTime = Math.floor(index / 3) + 1;

  if (index >= 18) {
    addedTime = Math.floor((index - 1) / 3) + 1;
    if (index === 25) {
      addedTime = Math.floor((index - 1) / 3);
    }
  }
  time += addedTime;

  result += time;
}

console.log(result);