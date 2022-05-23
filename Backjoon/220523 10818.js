const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const arr = input[1].split(" ").map((value) => +value);
arr.sort(function sort1(a, b) {
    return a - b;
});

console.log(arr[0], arr.pop());
