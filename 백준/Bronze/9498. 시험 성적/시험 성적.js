const input = require('fs').readFileSync('/dev/stdin').toString();

const result = parseInt(input);

if (result >= 90) {
  console.log('A');
} else if (80 <= result && result < 90) {
  console.log('B');
} else if (70 <= result && result < 80) {
  console.log('C');
} else if (60 <= result && result < 70) {
  console.log('D');
} else {
  console.log('F');
}