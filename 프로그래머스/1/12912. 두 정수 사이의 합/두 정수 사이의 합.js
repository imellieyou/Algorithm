function solution(a, b) {
    let answer = 0;
    
    if(b - a > 0) {
        for (let i = a; i <= b; i++) {
            answer += i;    
        } 
    } else {
        for (let i = b; i <= a; i++) {
             answer += i;    
        }   
    }
   
    
    return answer;
}