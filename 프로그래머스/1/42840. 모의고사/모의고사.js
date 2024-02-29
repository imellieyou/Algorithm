function solution(answers) {
  // 각 수포자의 찍기 패턴 정의
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    // 각 수포자별 정답 수를 저장할 배열 초기화
    const score = [0, 0, 0];

    // 주어진 답안을 순회하며 각 수포자의 정답 수 계산
    for (let i = 0; i < answers.length; i++) {
        patterns.forEach((pattern, index) => {
            // i % pattern.length!
            if (pattern[i % pattern.length] === answers[i]) {
                // 배열의 특정 인덱스 ++하는 방법!
                score[index]++;
            }
        });
    }

    // 가장 많은 문제를 맞힌 사람 찾기
    const maxScore = Math.max(...score);
    const result = [];

    for (let i = 0; i < score.length; i++) {
        if (score[i] === maxScore) {
            result.push(i + 1);
        }
    }

    // 오름차순 정렬하여 반환
    return result.sort();
}