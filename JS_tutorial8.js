//Rekurze
// Faktoriál
function facto(x) {
    if (x===1)
        return 1;
    else
        return x * facto(x-1);
}
const num = 3;
let result = facto(num);
console.log(`The factorial of ${num} is ${result}`);