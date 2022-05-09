//https://www.acmicpc.net/problem/8393

const input = require("fs").readFileSync("/dev/stdin").toString();

let cnt = 0;
for (i = 1; i <= input; i++) {
    cnt = cnt + i;
}
console.log(cnt);
