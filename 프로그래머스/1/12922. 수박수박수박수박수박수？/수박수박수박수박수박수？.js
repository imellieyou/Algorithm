function solution(n) {
    let cnt = 1;
    let txt = '';
    
    while (cnt <= n) {
        cnt % 2 ? txt += '수' : txt += '박';
        cnt++;
    }
    
    return txt;
}