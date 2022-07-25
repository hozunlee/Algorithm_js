let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const testCaseNumber = input.shift();

for (let i = 0; i < testCaseNumber; i += 1) {
    let value = input[i].split(" ").map((v) => +v);
    const studentN = value.shift();

    const sum = value.reduce((a, b) => a + b, 0);
    const avg = sum / studentN;

    let overAvg = 0;
    for (let j = 0; j < studentN + 1; j += 1) {
        if (value[j] > avg) {
            overAvg += 1;
        }
    }

    const overAvgPer = ((overAvg / studentN) * 100).toFixed(3);
    console.log(overAvgPer + "%");
}
