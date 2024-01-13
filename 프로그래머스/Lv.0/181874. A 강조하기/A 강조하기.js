function solution(myString) {
    let answer = '';
    
    let lowerStr = myString.toLowerCase();
    
    for(let i = 0; i < lowerStr.length; i++) {
        lowerStr[i] === "a"
        ? answer += lowerStr[i].toUpperCase() 
        : answer += lowerStr[i];
    }
    
    return answer;
}