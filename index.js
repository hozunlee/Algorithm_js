const input = require("fs")
    .readFileSync("example.txt")
    .toString()
    .split("\n")
    .map((value) => +value);

console.log(input);

let [A, B] = input;

console.log(A - B);
