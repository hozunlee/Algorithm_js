//https://www.acmicpc.net/problem/10871

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = input[0].split(" ");
const arr = input[1].split(" ");

let answer = "";

for (i = 0; i <= a; i++) {
    if (b > +arr[i]) {
        answer += arr[i] + " ";
    }
}

console.log(answer);
