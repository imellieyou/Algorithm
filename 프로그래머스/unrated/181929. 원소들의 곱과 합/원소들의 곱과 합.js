function solution(num_list) {
    let case1 = num_list.reduce((acc, cur) => acc * cur, 1)
    let case2 = num_list.reduce((acc, cur) => acc + cur, 0)
    
    return case1 > case2 * case2 ? 0 : 1;
}