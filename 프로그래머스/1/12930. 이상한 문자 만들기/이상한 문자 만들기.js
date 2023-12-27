function solution(s) {
    let answer = []

    const words = s.split(' ').map(el => [...el]);

    for(let i = 0; i < words.length; i++) {
        let keyword = []
        for (let k = 0; k < words[i].length; k++) {
            keyword.push(k % 2 ? words[i][k].toLowerCase() : words[i][k].toUpperCase());
        }
        answer.push(keyword.join(''))
    }

    return answer.join(' ')

}