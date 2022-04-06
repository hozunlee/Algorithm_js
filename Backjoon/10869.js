const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
//  Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다. 내림
console.log(A % B);
