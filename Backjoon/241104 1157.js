let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .toUpperCase();

const array = {};
for (alpabet of input) {
    if (array[alpabet] === undefined) array[alpabet] = 1;
    else array[alpabet] += 1;
}
let result = "";
let count = 0;

for (key of Object.keys(array)) {
    if (array[key] > count) {
        count = array[key];
        result = key;
    } else if (array[key] === count) {
        result = "?";
    }
}

console.log(result);
