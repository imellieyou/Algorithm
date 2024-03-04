let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(el => parseFloat(el));

const [a, b, c] = input.slice(0, 3);
const [d, e, f] = input.slice(3);

let x, y;
for (x = -999; x <= 999; x++) {
  for (y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
    }
  }
}
