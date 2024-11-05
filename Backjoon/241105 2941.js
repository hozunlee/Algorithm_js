let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let count = input.shift();

for (const item of input) {
    let 사용된단어 = [];
    for (const word of item) {
        if (사용된단어.includes(word)) {
            if (사용된단어[사용된단어.length - 1] === word) {
                continue;
            } else {
                count--;
                break;
            }
        }
        사용된단어.push(word);
    }
}

console.log(count);
