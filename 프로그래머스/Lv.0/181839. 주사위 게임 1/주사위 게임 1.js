function solution(a, b) {
    const isEven = (num) => num % 2 === 0;
    
    const answer = isEven(a) && isEven(b) 
    ? Math.abs(a - b) 
    : isEven(a) || isEven(b)
    ? 2 * (a + b) 
    : Math.pow(a, 2) + Math.pow(b, 2);
    
    return answer;
}