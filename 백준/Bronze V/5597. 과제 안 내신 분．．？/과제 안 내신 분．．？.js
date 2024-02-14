let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const students = Array.from({ length: 30 }, (_, idx) => idx + 1);
const submitted = input.sort((a, b) => a - b);

const notSubmitted = students.filter((stu) => !submitted.includes(stu)).join('\n');

console.log(notSubmitted);