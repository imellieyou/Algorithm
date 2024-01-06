function solution(strings, n) {
   let answer = strings.sort((a, b) => {
       if(a[n] !== b[n]) {
           // a[n]이 알파벳 상 우선일 때 1을 반환하여 sort에 변화없게 정렬
           return a[n] > b[n] ? 1 : -1;
       }

       // 사전상 문자열 정렬
       return a > b ? 1 : -1;
   });

   return answer;
}