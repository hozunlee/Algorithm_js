const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const A = input.splice(0, N);

// 미리 분할된 배열을 저장
const B = input.map((row) => row.split(" ").map(Number));

const result = A.map((row, idx) => {
    const rowA = row.split(" ").map(Number);
    return rowA.map((a, i) => a + B[idx][i]).join(" ");
});

console.log(result.join("\n"));
