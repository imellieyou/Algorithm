function solution(arr) {
    let answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === arr[j][i]) {
                answer.push(true)
            } else {
                answer.push(false)
            }
                 
        }
    }
    return answer.includes(false) ? 0 : 1;
}