function random(min, max) {
    return Math.random() * (max - min /* - 0.000000000000001 */) + min;
}