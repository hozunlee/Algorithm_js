let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (let i = 1; i < input.length; i++) {
    let cnt = 0;
    let sum = 0;
    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            cnt += 1;
        } else {
            cnt = 0;
        }
        sum += cnt;
    }
    console.log(sum);
}
