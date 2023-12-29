function solution(k, m, score) {
    let answer = 0;
    
    let order = score.sort((a,b) => b - a);
    
    let box = [];
        
    for (let i = 0; i < order.length; i += m ) {
        box.push(order.slice(i, m + i));
    };
    
    box.filter(el => el.length === m).forEach(el => {
        answer += Math.min(...el) * m;
    });
    
    return answer;
}