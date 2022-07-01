const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [A, B, C] = input;

console.log(A * B * C);

const firstResult = String(A * B * C);

for (let i = 0; i <= 9; i++) {
    console.log(firstResult.split(i + "").length - 1);
}

// 다른 해답
// for (let i = 0; i <= 9; i++) {
//     let count = 0;

//     for (let j = 0; j < x.length; j++) {
//         if (Number(x[j]) === i) {
//             count++;
//         }
//     }

//     console.log(count);
// }
