//https://www.acmicpc.net/problem/1110

const input = +require("fs").readFileSync("/dev/stdin").toString();

let num = input;
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + (num % 10);
    // 10의 자리와 1의 자리를 분리하고 더한다.
    num = (num % 10) * 10 + (sum % 10);
    // 그 결과를 다시 num의 1의 자리를 10의 자리로 만들고 sum의 1의 자리를 더해본다.
    console.log(num);
    if (input === num) {
        // num 값과 input 값을 비교해보고 같으면 멈춘다.
        break;
    }
}

console.log(i);
