function solution(s, n) {
    let answer = '';
    
    s.split('').map((el) => {
        // 대문자
        if(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            if(el.charCodeAt(0) + n > 90) {
                return answer += String.fromCharCode(el.charCodeAt(0) + n - 26)
            }
            answer += String.fromCharCode(el.charCodeAt(0) + n)
        }
        // 소문자
        if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            if(el.charCodeAt(0) + n > 122) {
                return answer += String.fromCharCode(el.charCodeAt(0) + n - 26)
            }
            answer += String.fromCharCode(el.charCodeAt(0) + n)
        }
        
        // 공백
        if(el.charCodeAt(0) === 32) answer += ' '
    })
    
    return answer;
}