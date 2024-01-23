function solution(s) {
    const words = s.toLowerCase().split(' ');
    // 문장 처음 공백문자가 연속해서 나왔을 경우에는 word[0]이 공백이 될 수 있어서 word 체크 조건 추가
    const result = words.map((word, i) => word && word[0].toUpperCase() + word.slice(1));
    
    return result.join(' ');
}