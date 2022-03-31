const input = require("fs").readFileSync("example.txt").toString().split("\n");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a + b);
