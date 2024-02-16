let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ").map(Number);

let chess = [1, 1, 2, 2, 2, 8];

let result = chess.map((el, i) => (el -= input[i]));

console.log(result.join(" "));