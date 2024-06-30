const isPrmieNumber = (num) => {
    // check if the number is less than 2 or an integer
    if(num < 2 || num % 1 !== 0){
        return false;
    }
    // checks if the number is 2 or not divisible by other number
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
    
}
console.log(isPrmieNumber(13));