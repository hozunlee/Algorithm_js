const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split(" ")
    .map((value) => +value);

for (let i = 1; i < 10; i++) {
    console.log(`${input} * ${i} =`, input * i);
}
