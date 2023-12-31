function solution(t, p) {
    let answer = [];
    
    for (let i = 0; i < t.length; i++) {
        let str = t.slice(i, i + p.length);
        
        if(str.length === p.length) {
            answer.push(str);
        }
    } 

    return answer.filter(el => el <= p).length;
}