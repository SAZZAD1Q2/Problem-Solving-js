const numbers = [2,3,4,5,6];
const multiple = numbers.map((number) => {
    return number * 2
})

console.log(multiple);
const arr = ['allu', 'bnanana', 'lichi','k','er']
const arrLength = (arr) => {

return arr.filter(str => str.length <= 4)
}
console.log(arrLength(arr))
const anoStr = ['cat', 'dog', 'parrot', 'cow']
const strLength = () => {
   return anoStr.map(num => num.length)
}
console.log(strLength())

const newArr = [ ]
const arr1 = ['cat', 'dog', 'parrot', 'cow']
const arrLength1 = (arr1) => {
    return newArr.push = arr1.map(str => str.length)
}
console.log(arrLength1(arr1))      

const myNewArr = [];
const myArr = ['cat', 'dog', 'parrot', 'cow']
const anotherArr = myArr.filter(str => str.length <= 3)
console.log(anotherArr)