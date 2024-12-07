const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split("\n");

input.pop();
input.forEach((element) => {
    const [A, B, C] = element.split(" ").map(Number);
    console.log(
        A ** 2 + B ** 2 === C ** 2 ||
            A ** 2 + C ** 2 === B ** 2 ||
            B ** 2 + C ** 2 === A ** 2
            ? "right"
            : "wrong"
    );
});
