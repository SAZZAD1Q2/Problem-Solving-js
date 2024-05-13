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