const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./example.txt")
    .toString()
    .trim()
    .split("\n");

input.shift();

input.forEach((data) => {
    const [층, , 손님수] = data.split(" ").map(Number);

    // 층수를 손님수로 나눈 나머지가 0이면 층수는 층이 된다.
    let 층수 = 손님수 % 층 || 층;

    // 손님수를 층으로 나누면 호수가 나온다.
    const 호수 = Math.ceil(손님수 / 층);
    // 호수가 10보다 작으면 앞에 0을 붙여준다.
    console.log(`${층수}${호수 < 10 ? `0${호수}` : 호수}`);
});
