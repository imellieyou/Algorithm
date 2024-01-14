function solution(num_list) {
    const oddSum = num_list.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc + cur);
    const evenSum = num_list.filter((_, i) => i % 2 !== 0).reduce((acc, cur) => acc + cur);
    
    return Math.max(oddSum, evenSum);
}