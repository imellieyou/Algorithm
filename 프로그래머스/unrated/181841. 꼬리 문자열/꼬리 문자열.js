function solution(str_list, ex) {
    let answer = str_list.filter(el => el.indexOf(ex) === -1)
    
    return answer.join('');   
}