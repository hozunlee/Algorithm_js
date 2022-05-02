// https://www.acmicpc.net/problem/2480

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((value) => +value);

input.sort(function (a, b) {
    return b - a;
});

const [A, B, C] = input;

if (A !== B && A !== C && B !== C) {
    console.log(A * 100);
} else if (A === B && B !== C) {
    console.log(1000 + A * 100);
} else if (B === C && C !== A) {
    console.log(1000 + C * 100);
} else if (C === A && A !== B) {
    console.log(1000 + C * 100);
} else {
    console.log(10000 + A * 1000);
}

//숏코딩

let [a, b, c] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((x, y) => x - y);

if (a == b && b == c) {
    console.log(10000 + a * 1000);
} else if (a == b || b == c) {
    console.log(1000 + b * 100);
} else {
    console.log(c * 100);
}
