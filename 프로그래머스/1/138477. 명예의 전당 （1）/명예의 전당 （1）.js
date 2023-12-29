function solution(k, scores) {     
    let result = [];
    let ranking = [];
    
    scores.forEach(score => {
        ranking.push(score);
        ranking.sort((a, b) => a - b);
        
        if(ranking.length > k) {
            ranking.shift();
        }
    
        result.push(ranking[0])
    })
    
    return result;
}