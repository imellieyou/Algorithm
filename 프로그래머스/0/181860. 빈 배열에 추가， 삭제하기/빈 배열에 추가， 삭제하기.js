function solution(arr, flag) {
    let answer = [];
    
    for(let i = 0; i < flag.length; i++) {
         if(flag[i]) {
            for(let k = 0; k < arr[i]*2; k++) {
                answer.push(arr[i])
            }
        } else {
            for(let j = 0; j < arr[i]; j++) {
                answer.pop();
            }
        }
    }
    
    return answer;
}