function solution(citations) {
    let answer = 0;

    citations.sort((a, b) => b - a); // [6, 5, 3, 1, 0]

    for(let i = 0; i < citations.length; i++) {
        if(citations[i] > i) answer++;
        else break;
    }

    return answer;
}