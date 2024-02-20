let input = require("fs").readFileSync("/dev/stdin").toString().trim().toUpperCase();

let str = [...new Set(input)];

let answer = Array.from({ length: str.length }, () => 0);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < str.length; j++) {
    if (input[i] === str[j]) {
      answer[j]++;
    }
  }
}

for (let k = 0; k < answer.length; k++) {
  if (answer[k] === Math.max(...answer)) {
    if (answer.filter((el) => el === Math.max(...answer)).length > 1) {
      console.log("?");
      break;
    }
    console.log(str[k]);
  }
}
