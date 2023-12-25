function solution(a, b) {
    if(`${a}${b}` === `${b}${a}` || `${a}${b}` > `${b}${a}`) {
        return Number(`${a}${b}`)
    } 
    
    return Number(`${b}${a}`)

}