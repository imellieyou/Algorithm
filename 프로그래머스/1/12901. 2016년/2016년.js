function solution(a, b) {
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const week = ['THU', 'FRI' , 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    
    let dayCnt = days.slice(0, a - 1).reduce((acc, cur) => acc + cur, 0)
    
    return week[(dayCnt + b) % 7]; 
}

