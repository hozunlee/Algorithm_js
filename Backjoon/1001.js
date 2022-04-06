const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((value) => +value);

const [A, B] = input;

console.log(A - B);
