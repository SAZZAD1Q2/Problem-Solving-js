const reverseString = (str) => {
    return str.split('').reverse().join().replace(/[^a-z0-9]/g, '')
}

console.log(reverseString('edcbaabc'))

let x = [2,3,5,6,8]
const sars = (x) => {
    return x > 4
}
console.log(x.filter(sars))