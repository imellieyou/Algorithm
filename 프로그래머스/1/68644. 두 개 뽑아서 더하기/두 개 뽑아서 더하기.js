function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for (let k = i+1; k < numbers.length; k++) {
            answer.push(numbers[i] + numbers[k]);
        }
    }
    
    // set을 이용한 중복 제거 + 스프레드 문법을 이용한 배열화
    return [...new Set(answer)].sort((a, b) => a - b);
}