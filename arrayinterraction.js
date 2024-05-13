function arrInteraction(arr1, arr2){
    return arr1.filter(num => arr2.includes(num));
}
const arrOne = [2,3,4,7,9]
const arrTwo = [3,6,8,4,9]
console.log(arrInteraction(arrOne, arrTwo))