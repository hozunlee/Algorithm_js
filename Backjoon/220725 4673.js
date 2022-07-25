const noSelfNumber = (n) => {
    let arr = [];
    for (let i = 1; i <= 10000; i++) {
        let result = 0;
        let resm = i.toString().split("");
        for (let i = 0; i < resm.length; i += 1) {
            result += parseInt(resm[i]);
        }
        let nNum = i + result;
        arr.push(nNum);
    }
    for (let i = 1; i <= 10000; i += 1) {
        if (arr.indexOf(i) === -1) {
            console.log(i);
        }
    }
};

noSelfNumber(10000);
