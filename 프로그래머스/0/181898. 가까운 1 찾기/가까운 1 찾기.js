function solution(arr, idx) {
    return arr.findIndex((el, i) => idx <= i && el === 1);
}