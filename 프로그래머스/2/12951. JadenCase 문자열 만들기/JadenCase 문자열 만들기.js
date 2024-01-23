function solution(s) {
    const words = s.toLowerCase().split(' ');
    
    const result = words.map((word, i) => word && (word[0].toUpperCase() + word.slice(1)));
    
    return result.join(' ');
}