let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number);
const matrixA = input.slice(1, N + 1).map((row) => row.split(' ').map(Number));
const matrixB = input.slice(N + 1).map((row) => row.split(' ').map(Number));

function addMatrices(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < N; i++) {
    let row = [];
    for (let j = 0; j < M; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

const resultMatrix = addMatrices(matrixA, matrixB);
resultMatrix.forEach((row) => console.log(row.join(' ')));
