function solution(arr, divisor) {
    let division = arr.filter(el => el % divisor === 0);
    
    return division.length ? division.sort((a, b) => a - b) : [-1]
}