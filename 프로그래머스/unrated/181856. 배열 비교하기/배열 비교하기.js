function solution(arr1, arr2) {
   if(arr1.length !== arr2.length) {
       return arr1.length > arr2.length ? 1 : -1;
   } else {
       let arrA = arr1.reduce((acc, cur) => acc + cur, 0);
       let arrB = arr2.reduce((acc, cur) => acc + cur, 0);
       
       if(arrA > arrB) return 1
       else if(arrA < arrB) return -1
       else return 0;
   }
}