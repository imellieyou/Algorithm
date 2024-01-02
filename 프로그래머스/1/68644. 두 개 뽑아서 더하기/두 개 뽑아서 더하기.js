function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for (let k = i+1; k < numbers.length; k++) {
            if(!answer.includes(numbers[i] + numbers[k])){
                answer.push(numbers[i] + numbers[k]);
            }
        }
    }
    
    return answer.sort((a, b) => a - b);
}