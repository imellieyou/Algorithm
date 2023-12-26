function solution(absolutes, signs) {
    let answer = 0;
 
    for (let i = 0; i < absolutes.length; i++) {
      signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    
    // for (let i = 0; i < absolutes.length; i++) {
    //     if(signs[i]) {
    //         answer += absolutes[i]
    //     } else {
    //         answer += absolutes[i] * -1
    //     }
    // }
    
    
    
    return answer
}