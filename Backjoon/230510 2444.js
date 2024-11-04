let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const res = [];
for (let i = 1; i <= input; i++) {
    let side = " ".repeat(input - i);
    let star = "*".repeat(i * 2 - 1);
    res.push(side + star);
}

const res2 = res.slice(0, -1).reverse();

console.log(res.concat(res2).join("\n"));
// console.log(res2.join("\n"));
