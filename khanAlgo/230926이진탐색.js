//이진탐색
// 이진 검색을 실행하도록 doSearch' 함수를 완성하는 아래의 의사코드를 확인하세요.(이 의사코드는 전에 있던 내용에서도 보았습니다.)
// 1. min = 0 이고 max = n-1 입니다.
// 2.max < min, 이라면 멈춥니다. 타겟이 배열에 존재하지 않습니다. -1을 반환합니다.
// 3. 'guess'를 'max'와 'min'의 평균으로 계산하고 (정수가 될 수 있도록) 내림합니다.
// 4. 배열[guess]가 타겟과 같다면 멈춥니다. 찾았습니다! guess를 반환합니다.
// 5. 만약 추측이 너무 낮았다면, 즉 배열[guess] < 타켓이라면, min = guess + 1로 바꿉니다.
// 6. 그렇지 않다면 추측이 너무 높습니다. max = guess - 1로 바꿉니다.
// 7. 2단계로 돌아갑니다.

/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
var doSearch = function (array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;

    //.max < min, 이라면 멈춥니다. 니까 반대인 max >= min 을 준다.
    while (max >= min) {
        guess = Math.floor((min + max) / 2);
        if (array[guess] === targetValue) {
            return guess;
        } else if (array[guess] < targetValue) {
            min = guess + 1;
            console.log("min :>> ", min);
            continue;
        } else {
            max = guess - 1;
            console.log("max :>> ", max);
        }
    }

    return -1;
};

var primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
];

var result = doSearch(primes, 73);
console.log("Found prime at index " + result);

//Program.assertEqual(doSearch(primes, 73), 20);
