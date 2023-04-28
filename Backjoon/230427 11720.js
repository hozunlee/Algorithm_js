let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const arr = input[1].split("");

let res = 0;
for (const item of arr) {
    res += Number(item);
}

console.log(res);

// reduce 활용
// const arr = input[1].split("").reduce((a, curr) => +a + +curr);
// console.log(arr);
