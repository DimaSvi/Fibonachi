function fibonacchi (a,b, target) {
    console.log (a)
    if(b > target) return;

    fibonacchi (b, a+b, target)
}

fibonacchi (0, 1, 120)