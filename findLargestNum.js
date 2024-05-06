const findLargestNum = (arr) => {
    let largeNum = arr[0];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] > largeNum){
            largeNum = arr[i];
        }
    }
    return largeNum
}

const myArr = [3,2,7,12,19,1,5]
console.log(findLargestNum(myArr))