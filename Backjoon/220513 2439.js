//https://www.acmicpc.net/problem/2439

const input = require("fs").readFileSync("/dev/stdin").toString();

let answer = "";
let blank = "";

for (i = 1; i <= input; i++) {
    answer += "*";
    for (let j = 0; j < input - i; j++) {
        blank += " ";
    }
    console.log(blank + answer);
    blank = "";
}
