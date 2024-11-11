const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split("\n");

let 최대수 = 0;
let 최대수의x좌표 = 0;
let 최대수의y좌표 = 0;

for (let i = 0; i < input.length; i++) {
    const array = input[i].split(" ").map(Number);
    const 이구역의최고숫자 = Math.max(...array);
    if (최대수 < 이구역의최고숫자) {
        최대수 = 이구역의최고숫자;
        최대수의x좌표 = i;
        최대수의y좌표 = array.indexOf(이구역의최고숫자);
    }
}

console.log(`${최대수} \n${최대수의x좌표 + 1} ${최대수의y좌표 + 1}`);
