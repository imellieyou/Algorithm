function solution(s) {
    let word = s.split('');
    
    let arr = [];
    
    for (let i = 0; i < word.length; i++) {
        // 첫번째 글자는 무조건 -1 + 중복 글자 없을 경우 -1
        if(i === 0 || (word.indexOf(word[i]) === i)) {
            arr.push(-1);
            continue;
        }
        
        if(word.indexOf(word[i]) !== i) {
            if(!s.slice(0, i).includes(word[i])){
                 arr.push(i - word.indexOf(word[i])) 
            } else {
                 arr.push(i - s.slice(0, i).lastIndexOf(word[i])) 
            }
        } 
    }

    return arr;
}