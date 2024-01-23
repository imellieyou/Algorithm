function solution(s){
    if(s.indexOf('(') > 0) return false;
    
    else {
        let open = 0;
        let close = 0
        
        for(let i = 0; i < s.length; i++) {            
            if(s[i] === '(') {
                open++;
            } else if(s[i] === ')') {
                close++
                if(close > open) return false
            }
            
            // if(s[1] === ')' && s[2] === ')') return false;

        }
        
        return open === close ? true : false;
    }
}