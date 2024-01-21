function solution(intStrs, k, s, l) {
    return intStrs.map(int => Number(int.slice(s, s + l))).filter(num => num > k);
}