const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...input);

// 개행문자로 줄바꿈
console.log(max + "\n" + (input.indexOf(max) + 1));
