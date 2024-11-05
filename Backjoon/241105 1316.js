let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const croa = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let count = 0;

for (let i = 0; i < input.length; i++) {
    // 앞글자랑 다음 글자를 조합해본다.
    const test = input[i] + input[i + 1];

    if (test === "dz") {
        if (input[i + 2] === "=") {
            count++;
            i += 2;
            continue;
        }
    }

    // 이 글자가 크로아티아 알파벳에 포함되어있는지 확인한다.
    const match = croa.find((el) => el === test);

    if (match) {
        count++;
        i++;
        continue;
    }
    count++;
}

console.log(count);

// 크로아티아 언어를 순회하며 input을 검사 있으면 * 로 치환시켜서 length를 구한다.
// let str = input[0];

// const croas = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// croas.forEach((v) => {
//   str = str.replaceAll(v, '*');
// });

// console.log(str.length);
