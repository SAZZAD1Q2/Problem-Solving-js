const isPalindrome = (str) => {
    // str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.toLowerCase().replace(/[^a-z0-9]/g,'').split('').reverse().join('');
}
console.log(isPalindrome('level'))