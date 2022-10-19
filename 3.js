function random(min, max) {
    return Math.random() * (max - min /* - 0.000000000000001 */) + min;
}

console.log(random(1, 5));
console.log(random(1, 5));
console.log(random(1, 5));

