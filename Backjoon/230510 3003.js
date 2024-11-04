let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

const cnt = [1, 1, 2, 2, 2, 8];
for (const a in input) console.log(cnt[a] - input[a]);
