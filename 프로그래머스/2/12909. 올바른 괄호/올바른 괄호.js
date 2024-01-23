function solution(s){
    // s의 시작이 ')'인 경우 false 리턴
    if(s.indexOf(')') === 0) return false;
    
    // s의 시작이 '('인 경우
    let cnt = 0;

    for(let i = 0; i < s.length; i++) {            
        if(s[i] === '(') cnt++;
        else if(s[i] === ')') {
            cnt--;
            // ')'가 지금까지의 '('보다 더 많아서 음수가 되면 짝이 맞지 않았다는 뜻이므로 false 리턴 
            if(cnt < 0) return false;
        }  
    } 

    return cnt === 0;
}