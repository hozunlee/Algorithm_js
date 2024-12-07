const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split("\n");

input.shift();
input.forEach((money) => {
    let result = [];
    let amount = parseInt(money, 10);

    for (const coin of [25, 10, 5, 1]) {
        result.push(Math.floor(amount / coin));
        amount = amount % coin;
    }

    console.log(result.join(" "));
});
