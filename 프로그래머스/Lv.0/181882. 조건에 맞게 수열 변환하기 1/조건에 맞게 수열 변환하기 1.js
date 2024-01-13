function solution(arr) {
    return arr.map((el) => {
        return el % 2 && el < 50 
            ? el * 2 
            : el % 2 === 0 && el >= 50
            ? el /2 : el
    });
}