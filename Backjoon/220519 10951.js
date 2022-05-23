const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (i = 0; i <= input.length - 1; i++) {
    let [a, b] = input[i].split(" ").map((value) => +value);
    console.log(a + b);
}
