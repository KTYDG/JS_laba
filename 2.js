function checkSpam(message) {
    let mess = String(message).toLowerCase();
    if (mess.includes("viagra") || mess.includes("xxx")) {
        return true;
    }
    return false;
}

console.log(checkSpam("ViaGra") == true);
console.log(checkSpam("xXx") == true);
console.log(checkSpam("totally not viagra") == true);
console.log(checkSpam("cops") == false);

