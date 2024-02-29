function solution(n, lost, reserve) {
    // 먼저, 정렬을 통해 순서대로 처리하도록 변경
    const sortedLost = lost.sort((a, b) => a - b);
    const sortedReserve = reserve.sort((a, b) => a - b);

    // 도난당했지만 여벌이 있는 경우 제거
    const realLost = sortedLost.filter(l => !sortedReserve.includes(l));
    let realReserve = sortedReserve.filter(r => !sortedLost.includes(r));

    let answer = n - realLost.length;

    realReserve.forEach(r => {
        // 바로 앞 번호 학생 또는 바로 뒷 번호 학생에게 체육복을 빌려줄 수 있는지 확인
        if (realLost.includes(r - 1)) {
            realLost.splice(realLost.indexOf(r - 1), 1);
            answer++;
        } else if (realLost.includes(r + 1)) {
            realLost.splice(realLost.indexOf(r + 1), 1);
            answer++;
        }
    });

    return answer;
}
