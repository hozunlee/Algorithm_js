// https://www.acmicpc.net/problem/2525

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let H = input[0].split(" ")[0];
let M = input[0].split(" ")[1];
let C = input[1];

solution(+H, +M, +C);

function solution(H, M, C) {
    M += C;
    while (M >= 60) {
        M -= 60;
        H += 1;
    }
    H %= 24;
    console.log(H, M);
}

//숏코딩

console.log(
    m >= 45
        ? h + " " + (m - 45)
        : h
        ? h - 1 + " " + (60 - 45 + m)
        : 23 + " " + (60 - 45 + m)
);
