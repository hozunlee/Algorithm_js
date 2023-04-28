let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

let cnt = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i]) {
        cnt += 1;
    }
}

console.log(cnt);

// 빈 문자열 '' 를 걸러내는게 핵심이다.
