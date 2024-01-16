function solution(numLog) {
    let answer = '';
    
    for(let i = 0; i < numLog.length - 1; i++) {
        const log = numLog[i + 1] - numLog[i];
        
        if(log === 1) {
            answer += "w";
        } else if(log === -1) {
            answer += "s";
        } else if(log === 10) {
            answer += "d";
        } else {
            answer += "a";
        }
    }
    return answer;
}