function solution(name, yearning, photo) {
    var answer = [];
    
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        
        for (let k = 0; k < photo[i].length; k++) {
            if(name.indexOf(photo[i][k]) === -1) {
                continue;
            }
            score += yearning[name.indexOf(photo[i][k])]
        }
        
        answer.push(score)
    }
    return answer;
}