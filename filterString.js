const filterStringByLength = (arr, minimumLength) => {
   return arr.filter(str => str.length > minimumLength  )
}

const myArr = ['orange', 'tom', 'gazipur', 'banana', 'amjonota','lichi']
console.log(filterStringByLength(myArr, 7))