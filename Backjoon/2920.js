const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const 초기값 = input[0];

let index = 초기값 === 1 ? 1 : 8;
for (const number of input) {
    if (number !== index) {
        console.log("mixed");
        break;
    }

    if (초기값 === 1) {
        index++;
        if (index === 8) {
            return console.log("ascending");
        }
    }
    if (초기값 === 8) {
        index--;
        if (index === 1) {
            return console.log("descending");
        }
    }
}
