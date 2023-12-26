function solution(num_list) {
    let even = '';
    let odd = '';
   
    num_list.map(el => {
        if (el % 2 === 0) {
            even += el;
        } else odd += el;
    })
    
    return Number(even) + Number(odd);
        
    
}