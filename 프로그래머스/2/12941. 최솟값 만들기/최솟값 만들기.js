function solution(A,B){
    const arrA = A.sort((a, b) => a - b);
    const arrB = B.sort((a, b) => b - a);
    
    return arrA.reduce((acc, cur, idx) => acc + (arrB[idx]) * cur, 0);
}