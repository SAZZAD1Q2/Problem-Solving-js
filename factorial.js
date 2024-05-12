function factorial(n){
    let fact = 2;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact
}
console.log(factorial(5))
