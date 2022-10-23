//function* = Generator function - viz. IteratorsAndGenerators.js
function* generator(i){
    yield i; // první hodnota v sekvenci - první konzumovaná hodnota při použití next() metody
    yield i + 10; // druhá a zároveň poslední konzumovaná hodnota v sekvenci
    // Vrácený Iterator obrahuje sekvenci dvou čísel (x, x + 10)
}
const gen = generator(10);
console.log(gen.next().value); 
console.log(gen.next().value);
console.log(gen.next()); // Pokud se budeme snažit produkovat další hodnotu i po zkonzumování celé sekvence generátoru -> generátor bude vracet : {value: undefined, done: true}

// Generator funkcí nelze použít arrow zkratku funkce z ES6

/*
Volání funkce generátoru neprovede její tělo okamžitě; místo toho je vrácen Iterator objekt. 
Když je volána metoda next() Iteratoru, tělo Generator funkce je prováděno až do prvního výrazu yield, který určuje hodnotu, která má být vrácena z iterátoru.
    Nebo s yield* deleguje na jinou funkci generátoru
Metoda next() vrátí objekt s vlastností value obsahující vrácenou hodnotu a vlastnost done, která označuje, zda generátor získal svou poslední hodnotu [true / false]. 
Volání metody next() s argumentem obnoví provádění funkce generátoru a nahradí výraz yield, kde bylo provádění pozastaveno, argumentem z next().


Příkaz return v generátoru, když je proveden, dokončí generátor (tj. vlastnost done objektu, který vrací, bude nastavena na true). 
Pokud je vrácena hodnota, bude nastavena jako vlastnost value objektu vráceného generátorem. 
Podobně jako return příkaz, chyba thrown uvnitř generátoru způsobí, že generátor bude dokončen - pokud není catch v těle generátoru. 
Po dokončení generátoru následná volání next() nespustí žádný kód tohoto generátoru, pouze vrátí objekt tohoto tvaru: {value: undefined, done: true}.
*/

function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}
const gen2 = idMaker();
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

//yield*
console.log("yield* example");
function* anotherGen(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* randomGen(i) {
    yield i;
    yield* anotherGen(i);
    yield i + 10;
}
const gen3 = randomGen(10);
console.log(gen3.next().value); // první yield z randomGen : 10 [i]
console.log(gen3.next().value); // yield* z randomGen, který nás odkazuje na jinou Generator funkci -> anotherGen. Tudíž tato hodnota je první yield z anotherGen : 11 [i+1]
console.log(gen3.next().value); // druhý yield z anotherGen : 12 [i+2]
console.log(gen3.next().value); // třetí yield z anotherGen : 13 [i+3]
console.log(gen3.next().value); // po vyčerpání sekvence z funkce generátoru na kterou nás odkázala yield*, pokračujeme v původním generátoru. Třetí yield z randomGen : 20 [i+10]
console.log(gen3.next().value); // konec : undefined

// Generators a argumenty
console.log("Generators and arguments examples")

function* logGenerator() {
    console.log(0);
    console.log(1, yield);

    let a, b;
    a = 4, b = 12;
    console.log(a**b);

    console.log(2, yield);
    console.log(3, yield);
}
const gen4 = logGenerator();
gen4.next(); // První volání next() se provede od začátku funkce až do prvního yield statementu | 0
gen4.next("Houska"); // Provede se kód až do dalšího yield statementu
gen4.next("mayonnaise");
gen4.next("pretzel");


//Return statement v generátoru
console.log("Return in Generators");

function* RetGenerator() {
    yield "Y";
    return "RETURN";
    yield "AFTER RETURN";
}
const gen5 = RetGenerator();
console.log(gen5.next());
console.log(gen5.next()); // Return příkaz dokončí generátor -> done: true | hodnota vrácená returnem bude vrácena ve value vlastnosti { value: 'RETURN', done: true }
console.log(gen5.next()); // Jelikož je generátor dokončený příkazem return -> next() vrací - value: undefined | done: true

//Generator jako vlastnost objektu
console.log("Generator jako vlastnost objektu");
const someObj = {
    *generator () {
        yield "prvni";
        yield "drugy";
        yield "treti";
    }
}
const gen6 = someObj.generator();
console.log(gen6.next());
console.log(gen6.next());
console.log(gen6.next());
console.log(gen6.next());

//Generator jako metoda objektu
console.log("Generator jako metoda objektu");
class Foo {
    *generator() {
        yield 14;
        yield 15;
        yield 16;
    }
}

const f = new Foo();
const gen7 = f.generator();
console.log(gen7.next());
console.log(gen7.next());
console.log(gen7.next());
console.log(gen7.next());

// U generátorů nelze použít "New" keyword -> nejsou constructable

//Generátor definovaný v expression
console.log("Generator expression");
const Genfoo = function* () {
    yield 12;
    yield 13;
};

const gen8 = Genfoo();
console.log(gen8.next());
console.log(gen8.next());
console.log(gen8.next());


//Generators example
function* powers(n) {
    //endless loop - for cyklus nemá horní podmínku
    for (let curr = n; ; curr *= n) {
        yield curr;
    }
}

for (const power of powers(2)) {
    // Přes hodnoty v sekvenci generator funkce iterujeme pomocí for ... of loopu -> každá iterace zavolá next() metodu
    if (power > 32) {
        break;
    }
    console.log(power);
}

//Další example for ... of loopu
console.log("For ... of for dumbs");
function* random() {
    yield 12;
    yield 11;
    yield 10;
    yield "ahoj";
}
for (const t of random()) {
    console.log(t);
}