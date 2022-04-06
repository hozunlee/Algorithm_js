const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(`${input}??!`);

//String.prototype.trim()
// trim() 메서드는 문자열 양 끝의 공백을 제거합니다. 공백이란 모든 공백문자(space, tab, NBSP 등)와 모든 개행문자(LF, CR 등)를 의미합니다.

// 숏코딩
console.log(require("fs").readFileSync(0, "utf8").trim() + "??!");
