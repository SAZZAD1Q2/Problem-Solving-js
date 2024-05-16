const pan = 'abcdefghijklmnopqrstuvwxyz';
function isPangram(str){
    str = str.toLowerCase();
    for(char of pan){
        if(!str.includes(char)){
            return false
        }else{
            return true
        }
}
}
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))