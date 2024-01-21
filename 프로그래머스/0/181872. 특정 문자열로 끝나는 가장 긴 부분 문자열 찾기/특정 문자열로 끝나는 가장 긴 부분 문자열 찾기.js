function solution(myString, pat) {
    const idx = myString.lastIndexOf(pat.slice(-1));
    
    return myString.slice(0, idx + 1);
}