const myStr = 'He Saif';
const sectOfStr = () => {
    let result = '';
    for (let char of myStr) {
       result += char;
    }
    return result;
}
console.log(sectOfStr())