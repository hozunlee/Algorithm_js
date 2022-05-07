const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (i = 1; i <= input[0]; i++) {
    let [a, b] = input[i].split(" ").map((value) => +value);
    console.log(a + b);
}
