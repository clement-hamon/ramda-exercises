function sumOfMultFunc(a, b, n){
    return sum(
        filter(
            anyPass([
              complement(modulo(__, a)), // 0 -> false -> multiple of a
              complement(modulo(__, b))  // 0 -> false -> multiple of b
            ]),
            range(1, n)
        )
    )
}
sumOfMultFunc(3,5,1000);