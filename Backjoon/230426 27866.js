let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

input.shift();

for (const item of input) {
    const long = item.length;
    console.log(item[0] + item[long - 1]);
}
