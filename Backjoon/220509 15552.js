//https://www.acmicpc.net/problem/15552

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = "";

for (i = 1; i <= input[0]; i++) {
    let [a, b] = input[i].split(" ").map((value) => +value);
    answer += a + b + "\n";
}

console.log(answer);
