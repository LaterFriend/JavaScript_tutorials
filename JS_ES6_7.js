// JS for ... of loop
// Iterování přes iterovatelné objekty (arrays, sets, maps, strings atd.)

//arrays
const students = ["John", "Sarah","Thomas","Patric"];
for (let element of students) {
    console.log(element);
}
//strings
const string = "Ahojda";
for (let char of string) {
    console.log(char);
}
//sets
const set = new Set([1,2,3]);
for (let i of set) {
    console.log(i);
}
//maps
let map = new Map();
map.set("name","Jack");
map.set("age","23");
for (let [key, value] of map) {
    console.log(key + "- " + value);
}
//generators 
//generator function
function* generatorFunc() {
    yield 10;
    yield 20;
    yield 30;
}
const obj = generatorFunc();
for (let value of obj) {
    console.log(value);
}

// [key : value] 
// for ... of - iteruju přes value hodnoty
// for ... in - iteruju přes key hodnoty

// Iterator - produkuje sekvenci hodnot

//Aby byl objekt iterable - musí mít @@iterator metodu
//Aby byl objekt iterator - musí mít metodu next()

const aGeneratorObject = (function* () {
    yield 1;
    yield 2;
    yield 3;
})();
console.log(typeof aGeneratorObject.next); // "function" - to znamená, že má next metodu - je to iterator
console.log(typeof aGeneratorObject[Symbol.iterator]); // "function" - to znamená, že má @@iterator metodu - je to iterable
console.log(aGeneratorObject[Symbol.iterator]() === aGeneratorObject); // true - jeho @@iterator metoda vrací sama sebe (iterator )