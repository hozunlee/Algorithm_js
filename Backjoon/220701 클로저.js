//클로저
var fullname = function () {
    var last = "lee";
    return function (first) {
        return last + first;
    };
};

const x = fullname();
console.log(x("hello"));
