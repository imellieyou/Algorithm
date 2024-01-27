function solution(my_string) {
    let upper = Array.from({length: 26}).fill(0);; // 65 ~ 90
    let lower = Array.from({length: 26}).fill(0); // 97 ~ 122
    
    for(let i = 0; i < my_string.length; i++) {
        const charCode = my_string[i].charCodeAt(0);
        
        // 대문자
        if(charCode >= 65 && charCode <= 90) {
            upper[charCode - 65] += 1;
        } else {
        // 대소문자로만 이루어져있으니까 else처리
            lower[charCode - 97] += 1;
        }
    }
    
    return [...upper, ...lower];
}