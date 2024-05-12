function findLargestNum(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest
}
const myNum = [3,5,2,67,34,89,23];
console.log(findLargestNum(myNum))