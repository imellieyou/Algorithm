const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const basketCnt = Number(input[0].split(" ")[0]);
const ballCnt = Number(input[0].split(" ")[1]);

const baskets = Array.from({ length: basketCnt }).fill(0);

for (let i = 1; i <= ballCnt; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);

  baskets.splice(
    a - 1,
    b - a + 1,
    ...Array.from({ length: b - a + 1 }).fill(c)
  );
}

console.log(baskets.join(" "));