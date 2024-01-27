const countOne = (string) => string.toString(2).split('').filter(n => n === "1").length

function solution(n) {    
    let result = n+1;
    
    while(n < result){
        if(countOne(result) === countOne(n)){
            break;
        }
        result++;
    }
    
    return result;
}