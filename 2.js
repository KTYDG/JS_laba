function checkSpam(message) {
    let mess = String(message).toLowerCase();
    if (mess.includes("viagra") || mess.includes("xxx")) {
        return true;
    }
    return false;
}