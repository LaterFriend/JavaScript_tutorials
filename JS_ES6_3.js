//SPREAD OPERATOR
// pro roztažení iterable nebo arraye
const myValues_ = ["My","name","is","Daniel"];
console.log(myValues_);
console.log(...myValues_); // ekvivalent k : console.log('My', 'name', 'is', 'Daniel');


//Pro kopírování elementů do jednoho arraye
const arr1 = ["one","two"];
const arr2 = [...arr1,"three","four","five"];
console.log(arr2);

// Klonování arraye pomocí spread operátoru
let ar1 = [1,2,3];
let ar2 = [...ar1]; //deep copy

ar1.push(4); //neovlivníme ar2, jako by tomu bylo při shallow kopírování
console.log(ar1);
console.log(ar2);

//Spread operátor + objekty
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };

const obj3 = {...obj1, ...obj2}; //{ x: 1, y: 2, z: 3 }
const obj4 = {obj1, obj2}; //{ obj1: { x: 1, y: 2 }, obj2: { z: 3 } }

console.log(obj3);
console.log(obj4);

//REST parametr
// Pokud je spread operátor použit jako parametr -> označujeme ho jako REST parametr
// REST parametr nám pomáhá přijímat více argumentů danou funkcí

let func = function(...args) { //Při použití REST parametru jsou funkci předány parametry ve formě array elementů
    console.log(args);
}
func(3); // [3]
func(4,5,6);

function sum(x,y,z) {
    console.log(x+y+z);
}
const ar = [4,6,1,2];
sum(...ar); // předají se pouze první 3 elementy z pole - funkce si vezme pouze tolik položek, kolik potřebuje argumentů

// JavaScript Map
// ES6 představila 2 nové data struktury : Map, WeakMap
// Map - je podobná objektu, umožňuje ukládat elementy v key/value párech
    // - elementy jsou seřazené podle toho jak byli přidávané do Map
    // - narozdíl od objektu, Map umožňuje použít objekt, funkci nebo jiný data type jako key

// Vytvoření Map
let map1 = new Map();
console.log(map1);

//set() metoda pro vložení elementů do Map (key a napárovanou hodnotu oddělujeme čárkou)
map1.set("info",{name: "Daniel", age: 26});
map1.set("pozdrav","ahoj");
console.log(map1);

let obj_ = {};
map1.set(obj_,{name: "Jack", age: 22});
console.log(map1);

// přístup k Map elementům
// get() metoda
console.log(map1.get("info")); // získáme napárovanou hodnotu od key "info"
// has() metoda - zjistíme zda je daný key v Map
console.log(map1.has("pozdrav")); //true
console.log(map1.has("ahoj")); //false

//removing elements
// clear(), delete()
// delete() - vrací true, pokud specifikovaný key/value pár existuje a byl odstraněn, jinak vrací false

console.log(map1);
console.log(map1.delete("pozdrav")); // key/value pár specifikujeme pomocí key
console.log(map1);

//metoda clear() odstraní všechny key/value páry z Map
map2 = new Map(map1); //Deep copy
map2.clear();
console.log(map2);

//Map - size vlastnost - ukazuje počet key/value párů v Map
console.log(map1.size);


// Iterate through Map
// for ... of loop nebo forEach() metoda
let map_ = new Map();
map_.set("name","Daniel");
map_.set("age",24);
//looping through Map
for (let [key,value] of map_) {
    console.log(`${key} => ${value}`);
}

//forEach() metoda
map_.forEach(function(value, key){ // z nějakého důvodu musíme dát opačně key a value (jako value/key argument)
    console.log(key + " => " + value)
})

// Iterate over Map Keys
// metoda keys()
for (let key of map_.keys()) {
    console.log(key);
}

// Iterate over Map Values
// metoda values()
for (let value of map_.values()) {
    console.log(value);
}

// Metoda entries() - key/value páry v Map - každý pár vrací jako array o dvou položkách ([0] - key / [1] - value)
for (let pair of map_.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
}

//MAP VS OBJECT
// Map může mít jako key objekt nebo jiný data type | Objekt může mít jako key pouze string nebo symbol
// U Map můžeme přímo iterovat přes values | Přes Objekt můžeme iterovat pouze pomocí keys
// Počet položek v Map můžeme snadno zjistit pomocí size vlastnosti | Objekt nic takového nemá
// Map je lepší pro programy, kde často měníme, přidáváme nebo odstraňujeme elementy 


//WeakMap
// Podobná jako Map
// key hodnota WeakMap může být pouze Objekt
const wmap = new WeakMap();
console.log(wmap);

wmap.set(obj_, "hello");
console.log(wmap);
// metody get(), set(), delete(), has()
console.log(wmap.has(obj_));

//WeakMaps nejsou iterable - nelze přes ně iterovat 