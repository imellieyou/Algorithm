let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let [h, m] = input.map(Number);

if (m - 45 < 0) {
  m += 15; // m - 45 + 60;
  if (h === 0) {
    h = 23;
  } else {
    h -= 1;
  }
} else {
  m -= 45;
}

console.log(h, m);