/* ITERABLES
- Objekt je iterable (iterovatelný), pokud definuje své iterační chování, například jaké hodnoty jsou v loopu for ... of
- Některé built-in typy, například Array nebo Map, mají výchozí iterační chování, zatímco jiné typy (například Object) nemají

- K tomu aby byl objekt iterable (iterovatelný) musí mít metodu @@iterator
- To znamená, že objekt (nebo jeden z objektů v prototype chainu) musí mít vlasnost se Symbol.iterator key
- Může být možné iterovat přes iterable více než jednou nebo pouze jedno.
- Iterables, přes které je možno iterovat pouze jednou (např. Generátory) obvykle vracejí this z jejich @@iterator metody
- Iterables, přes které lze iterovat vícekrát musí vracet nový iterator při každém zavolání @@iterator metody
*/

function* makeIterator() {
    yield 1;
    yield 2;
}
const it = makeIterator();
for (const itItem of it) {
    console.log(itItem);
}
console.log(it[Symbol.iterator]() === it); //true
/* 
Tento příklad nám ukazuje, že generator (iterator) je iterable objekt, jehož metoda @@iterator vrací this (it).
    V důsledku toho může být přes objekt it iterováno pouze jednou. 

Pokud změníme jeho @@iterator metodu na funkci / generator, který vrací nový iterator / generator objekt -> můžeme přes daný objekt (it) iterovat vícekrát
*/
it[Symbol.iterator] = function*() {
    yield 2;
    yield 1;
};
// Nyní můžeme přes objekt it iterovat vícekrát jelikož při každé iteraci se bude vracet definovaná sekvence čísel ve vlastnosti Symbol.iterator : 2,1
for (const itItem of it) {
    console.log(itItem);
}
for (const itItem of it) {
    console.log(itItem);
}

//Uset-defined Iterables
console.log("Vytváření vlastního Iterable")
const myIterable = {
    *[Symbol.iterator]() { // definujeme novou vlastnost našeho objektu
        yield 1;
        yield 2;
        yield 3;
    }
}
for (const x of myIterable) {
    console.log(x);
}
console.log(...myIterable);

// Built-in Iterables
// String, Array, TypedArray, Map, Set jsou built-in iterables, jelikož jejich prototype objekty mají Symbol.iterator metodu

// Některé statementy a expressions očekávají iterables: např. for-of loops, yield* apod.
for(const value of ["a","b","c"]) {
    console.log(value);
}
console.log([..."abc"]);

function* gen() {
    yield* ["a","b","c"];
}
console.log(gen().next())
let [a, b, c] = new Set(["a","b","c"]);
console.log(a);

//Advanced Generators
// Metoda next() také přijímá hodnotu, kterou lze použít k úpravě vnitřního stavu generátoru.
// Hodnota předaná do next() bude přijata yield statementem
// Hodnota předaná do prvního zavolání next() metody je vždy ignorována

function* fibonacci() {
    let current = 0;
    let next = 1;
    while(true) {
        const reset = yield current; 
        // reset proměnná bude standartně undefined hodnota
        // pokud předáme metodě next() hodnotu -> yield statement bude touto hodnotou nahrazen
        console.log(reset);
        [current, next] = [next, next + current];
        if (reset) {
            current = 0;
            next = 1;
        }
    }
}

const sequence = fibonacci();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value); // zde předáváme metodě hodnotu, která nahradí yield statemen a tím změní chování generatoru
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next().value);

console.log("new");

function* gen() {
    while (true) {
        const value = yield;
        console.log(value);
    }
}
const g = gen();
g.next(2); // v tomto kroku se nic nestane, první hodnota poslána přes next() metodu je ztracena
g.next(); // yield nic nevrací sama o sobě, proto se do proměnné value uloží undefined
g.next(69); // yield statement je nahrazen hodnotou, kterou jsme předali next() metodě

