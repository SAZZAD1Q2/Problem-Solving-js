const isPrime = (num) => {
    // check if number is less than 2 or not an integer;
    if(num < 2 || num % 1 !== 0){
        return false;
    }
    // check for the divisiblity from 2 up to the square roor of the number
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(25))