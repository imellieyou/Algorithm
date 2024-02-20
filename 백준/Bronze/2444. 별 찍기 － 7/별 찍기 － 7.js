let input = require("fs").readFileSync("/dev/stdin").toString().trim()
let n = Number(input);
let row = n * 2 - 1;

for (let i = 0; i < row; i++) {
  if (i < n - 1) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  } else if (i === n - 1) {
    console.log("*".repeat(row));
  } else {
    console.log(
      " ".repeat(n - (row - i)) + "*".repeat(row - i + (row - i - 1))
    );
  }
}
