function solution(s){
    let str = s.toUpperCase().split(''); // 대소문자 구분 없게 대문자로 통일
    
    let strP = str.filter(el => el === "P").length 
    let strY = str.filter(el => el === "Y").length 
    
    if(strP == strY) {
        return true
    } else {
        return false
    }; 
    
    return true; // 모두 하나도 없는 경우는 항상 True를 리턴
    
}