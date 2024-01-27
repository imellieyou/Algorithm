function solution(arr) {
    let stk = [];
    
    let i = 0;
    
    while (i < arr.length) {
        if(!stk.length) {
            stk.push(arr[i]);
            i++;
        } else if(stk.length) {
            if(stk.slice(-1) < arr[i]) {
                stk.push(arr[i]);
                i++
            } else {
                stk.pop();
            }
            
        }
    }
    
    return stk;
}