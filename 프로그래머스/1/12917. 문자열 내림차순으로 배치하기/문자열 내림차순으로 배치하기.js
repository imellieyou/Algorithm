function solution(s) {
    // 소문자 : 아스키코드 97부터 
    var answer = '';
    return s.split('').sort((a, b) => a > b ? -1 : 1).join('');
}