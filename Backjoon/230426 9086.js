let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

for (const item of input) {
    if (typeof item !== number) {
        const long = item.length;
        console.log(item[0] + item[long - 1]);
    }
}
