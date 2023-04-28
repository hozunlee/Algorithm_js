let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

//제출답
for (let i = 1; i <= +input[0]; i = i + 1) {
    const res = input[i].split(" ");

    const ab = res[1].split("").map((item) => {
        let value = "";
        for (let i = 1; i <= res[0]; i++) {
            value += item;
        }
        return value;
    });
    console.log(ab.join(""));
}

// 리팩토링 답
for (let i = 1; i <= +input[0]; i = i + 1) {
    const [cnt, value] = input[i].split(" ");

    const ab = value.split("").map((item) => item.repeat(cnt));
    console.log(ab.join(""));
}
