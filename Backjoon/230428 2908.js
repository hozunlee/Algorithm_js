let [a, b] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

let res1 = "";
let res2 = "";

for (let i = 2; i >= 0; i--) {
    res1 += a[i];
    res2 += b[i];
}

console.log(res1 > res2 ? res1 : res2);
