const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split("\n");

const [A, B, C] = input.map(Number);

console.log(A + B - C);
console.log(input[0] + input[1] - input[2]);
