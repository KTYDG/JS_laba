function findVowels(message) {
    let mess = String(message).toLowerCase();
    return (mess.match(/[aeiou]/g) || []).length ;
}

console.log(findVowels('hello') == 2);
console.log(findVowels('why') == 0);
console.log(findVowels('Aio, how are you?') == 8);