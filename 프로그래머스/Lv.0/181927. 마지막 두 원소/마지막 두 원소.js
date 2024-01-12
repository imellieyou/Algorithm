function solution(num_list) {
    const last = num_list.slice(-1);
    const lastBefore = num_list.slice(-2, -1);
    
    return [...num_list, last > lastBefore ? last - lastBefore : last * 2];
}