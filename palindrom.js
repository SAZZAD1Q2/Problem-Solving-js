const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('levele'))