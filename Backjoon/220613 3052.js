let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const arr = input.map((item) => item % 42);

const set = new Set(arr);

const unique = [...set];
console.log(unique.length);
