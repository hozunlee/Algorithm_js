//https://www.acmicpc.net/problem/2741

const input = require("fs").readFileSync("/dev/stdin").toString();

let answer = "";

for (i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);
