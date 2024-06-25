function printnum(min, max) {
    if (min > max) {
        return;
    }
    console.log(min);
    printnum(min + 1, max);
    console.log(min);
}

printnum(1, 10);