// JavaScript Set
// Set je podobný jako Array
// Set nemůže uchovávat duplicitní hodnoty
// Na rozdíl od pythonu nemá Set built-in metody pro matematické operace jako union, intersection apod.
const set1 = new Set();
console.log(set1);

const set2 = new Set([1,"hello",false,{count:44}]);
console.log(set2);

// Duplicitní hodnoty jsou vymazány - nejsou zahrnovány 
const set3 = new Set([1,1,2,3,2,3]);
console.log(set3);

// Přístup k Set elementům pomocí metody values()
//has() metoda - kontrolujeme zda je jistý element v Setu
console.log(set3.values());
console.log(set3.has(3));

// přidání elementu pomocí add() metody
set3.add("4"); 
console.log(set3); 

// odstranění určitého elementu pomocí delete() / odstranění všech elementů pomocí clear()
set3.delete("4"); 
console.log(set3); 

//Iterování přes Set
// for ... of nebo forEach()
for (let i of set3) {
    console.log(i);
}


//WeakSet
// WeakSet může obsahovat pouze Objekty jako své elementy
const wSet = new WeakSet();
console.log(wSet);
let obj = {
    message: "hi",
    sendMessage: true
}
wSet.add(obj);
console.log(wSet);
// Metody add(), delete(), has()
console.log(wSet.has(obj));
//WeakSet není iterable - nelze přes něj iterovat