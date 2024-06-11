var reverse = function (x) {
    if (x < 0) {
        let newStr = x.toString();
    }
    return +(x.toString().split('').reverse().join(''));
};

console.log(reverse(-98));