let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const reverse = input.split("").reverse().join("");

console.log(input === reverse ? 1 : 0);
