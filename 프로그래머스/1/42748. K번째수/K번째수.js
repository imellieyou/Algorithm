function solution(array, commands) {
    let answer = [];
    
    commands.map((arr) => {
        answer.push(array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1]);
    });

    return answer;    
}


/*
입력값 〉 array [10, 2], commands [[1, 2, 1]]
기댓값 〉 [2]

2번에서 실패해서 체크. 단순 정렬에서 '숫자'기준 정렬로 변경하여 적용  
*/

