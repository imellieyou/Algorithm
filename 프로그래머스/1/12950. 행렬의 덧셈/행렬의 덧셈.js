function solution(arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = []; // arr1의 개수만큼 반복해서 빈 배열이 만들어진다.
        for (let j = 0; j < arr1[i].length; j++) {
            answer[i].push(arr1[i][j] + arr2[i][j])
        }
    }
    
    return answer
}