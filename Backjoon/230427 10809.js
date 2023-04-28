let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));

let res = "";
for (const a of alpha) {
    res += `${input.indexOf(a)} `;
}
console.log(res);

// console.log('abcdefghijklmnopqrstuvwxyz'.split('').map(c => input.indexOf(c)).join(' '))
