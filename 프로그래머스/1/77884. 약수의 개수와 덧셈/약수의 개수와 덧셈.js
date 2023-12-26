function solution(left, right) {
    let answer = 0;
    
    // 굳이 배열을 만들 필요가 없으니까 for문으로 수정
    for (let i = left; i <= right; i++) {
        Math.sqrt(i) % 1 ? answer += i : answer -= i;
    }
    
    return answer;
}