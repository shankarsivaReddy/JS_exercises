/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 */
const min = (a, b) => {
    if (a < b) {
        return a;
    }
    return b;
}

console.log(min(0, 10));
console.log(min(0, -10));