let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [N, M] = input[0].split(' ').map(Number);
const cards = input[1].split(' ').map(Number);

function closestSum(cards, N, M) {
  let result = 0; // 결과 값을 저장할 변수를 초기화합니다.
  // 모든 가능한 카드 3장의 조합에 대해 반복문을 실행합니다.
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        const sum = cards[i] + cards[j] + cards[k];
        // 합이 M을 넘지 않으면서, 이전에 발견한 합보다 큰 경우 결과를 갱신합니다.
        if (sum > result && sum <= M) {
          result = sum;
        }
      }
    }
  }
  return result;
}

// 계산된 결과를 출력합니다.
console.log(closestSum(cards, N, M));
