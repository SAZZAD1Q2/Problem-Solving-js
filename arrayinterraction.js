const arrIntersaction = (arr1, arr2) => {
   return arr1.filter(num => arr2.includes(num))
}

console.log(arrIntersaction([1,3,4],[3,4,5]))