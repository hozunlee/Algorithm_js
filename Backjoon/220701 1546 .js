let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const x = input[1].split(" ").map((v) => +v);

const m = Math.max(...x);

const newScore = x.map((item) => {
    return (item / m) * 100;
});

let sum = 0;

for (let i = 0; i < newScore.length; i++) {
    sum += newScore[i];
}
console.log(sum / input[0]);
