function solution(numbers) {
    // 숫자를 문자열로 변환 후, 두 문자열을 결합한 값이 더 큰 순서대로 정렬
    const sorted = numbers.map(num => num.toString()).sort((a, b) => (b + a) - (a + b));
    
    // 정렬된 배열을 문자열로 결합
    const answer = sorted.join('');
    
    // 모든 요소가 0인 경우 '0'을 반환하고, 그렇지 않으면 계산된 문자열을 반환
    return answer[0] === '0' ? '0' : answer;
}