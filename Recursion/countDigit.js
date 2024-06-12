function countDigit(n) {
    if (n === 0) {
        return 0;
    } else {
        return 1 + countDigit(Math.floor(n / 10));
    }
}

console.log(countDigit(8906));