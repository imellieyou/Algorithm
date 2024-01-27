function solution(str_list) {
    const indexOfL = str_list.indexOf('l');
    const indexOfR = str_list.indexOf('r');
    
    if(indexOfL < indexOfR) {
        return indexOfL > -1 
            ? str_list.slice(0, indexOfL) 
            : str_list.slice(indexOfR + 1);
    } else if(indexOfL > indexOfR){
        return indexOfR > -1 
            ? str_list.slice(indexOfR + 1) 
            : str_list.slice(0, indexOfL) ;
    } else if(indexOfL < 0 && indexOfR < 0) return []
}