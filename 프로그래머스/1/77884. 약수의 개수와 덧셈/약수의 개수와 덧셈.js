function solution(left, right) {
    // 숫자 범위 배열 만들기
    let nums = [];
    for (let i = left; i <= right; i++) {
        // 제곱근이 되는 숫자만 약수의 개수가 홀수
        nums.push(Math.sqrt(i) % 1 === 0 ? -i : i);
    }
    
    return nums.reduce((acc, cur) => acc + cur, 0)
}