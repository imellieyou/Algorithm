let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let reports = { 'A+': 4.5, A0: 4.0, 'B+': 3.5, B0: 3.0, 'C+': 2.5, C0: 2.0, 'D+': 1.5, D0: 1.0, F: 0.0 };

let units = 0;
let scores = 0;

for (let i = 0; i < input.length; i++) {
  const [, unit, grade] = input[i].split(' ');

  if (grade !== 'P') {
    units += Number(unit);
    scores += reports[grade] * unit;
  }
}

console.log(scores / units);