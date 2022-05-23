//https://www.acmicpc.net/problem/10952

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

console.log(input.length);

let answer = "";

for (i = 0; i <= input.length - 1; i++) {
    let [a, b] = input[i].split(" ").map((value) => +value);
    let plus = a + b;
    if (plus > 0) {
        console.log(plus);
    }
}
console.log(answer);
