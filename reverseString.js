const reverseString = (str) => {
    return str.split('').reverse().join()
}

console.log(reverseString('edcba'))

let x = [2,3,5,6,8]
const sars = (x) => {
    return x > 4
}
console.log(x.filter(sars))