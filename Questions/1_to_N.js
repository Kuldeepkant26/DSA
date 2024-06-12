let func = (n, i = 1) => {
    if (i <= n) {
        console.log(i)
    } else {
        return;
    }
    i++
    func(n, i);
}

func(5);