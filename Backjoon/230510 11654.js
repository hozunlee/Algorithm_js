let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let ascii_code = input.codePointAt(0);
console.log(ascii_code);
