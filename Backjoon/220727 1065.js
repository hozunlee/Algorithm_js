let input = +require("fs").readFileSync("/dev/stdin").toString().trim();

const hanNum = (Num) => {
    res = 0;
    for (let i = 1; i <= Num; i += 1) {
        if (i < 100) {
            res += 1;
            continue;
        }
        let N = String(i);
        let a = N[0] - N[1];
        let b = N[1] - N[2];
        if (a === b) {
            res += 1;
        }
    }
    return res;
};

hanNum();
