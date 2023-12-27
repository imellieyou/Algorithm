function solution(food) {
    let answer = [];
    
    for (let i = 1; i < food.length; i++) {
        if(parseInt(food[i] % 2)) {
            answer.push(`${i}`.repeat(parseInt((food[i] - parseInt(food[i] % 2)) / 2)))
        } else {
            answer.push(`${i}`.repeat(parseInt(parseInt(food[i]) / 2)))
        }
    }
    
    let reverse = [...answer].reverse();
    
    return answer.join('') + '0' + reverse.join('');

}