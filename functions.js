// Function Declaration 
function makeBread(qty) { //parametr - vstupní proměnné použité při tvorbě funkce
    const bread = "🍞".repeat(qty);

    console.log(bread);
    
    return bread;
}

const loaves = makeBread(7); //argument (skutečná hodnota používaná při volání fce)
console.log(loaves);

// Function declaration je hoisted (funkci můžeme používat v kódu dříve než dojde k její vytvoření - jelikož JS umístí všechny function declarations na začátek kódu)
// Function Expression není hoisted

// Function Expression
    // Vytvořili jsme proměnnou, které jsme jako hodnotu přiřadili anonymní funkci (funkce beze jména)
const makeBeer = function(qty) {
    return "🍺".repeat(qty);
}
const beers = makeBeer(7);
console.log(beers);
// Lepší používat Function Expression -> Není hoisted a je tudíž vidět kam v kódu jednoznačně patří


const makeBeer2 = function beerFun2(qty) {
    return '🍺'.repeat(qty);
} 
// I když to není časté, je možno použít neanonymní fci při function expression

// Immediately invoked function expression (IIFE)
// IIFE - okamžitě vyvolaná function expression
const z = (function(qty) {
    return "🍺".repeat(qty);
}(10)); //stejné jako: const beers = makeBeer(10)
console.log(z)


// Arguments and Parametrs
//Positional
function makeBreakfast (main, side, drink) {
    console.log(arguments); // Zobrazení argumentů v run-timu
    return `Breakfast includes ${main}, ${side}, and ${drink}`;
}
const breakfast = makeBreakfast("🥞", "🥓", "🥛");
console.log(breakfast);

//Named params
function makeLunch (opts) {
    // tato funkce má pouze jeden argument, ale tento argument je objekt, který může obsahovat více hodnot
    // lehčí pro rozšíření více argumenty v budoucnu bez nutnosti přepisu funkce
    // nemusíme se starat o pořadí vkládaných argumentů
    const {main, side, drink} = opts;
    return `Lunch includes ${main}, ${side} and ${drink}`;
}
const Lunch = makeLunch({main: "🌮", side: "🍟", drink: "🧃"});
console.log(Lunch);

//Rest params
function makeDinner (...args) {
    // Tato definice nám umožňuje zavolat funkci s více pozičními argumenty a poté k argumentům přistupovat jako k array uvnitř těla funkce
    return `Dinner includes the following items: ${args.join(" ")} and the third item is: ${args[2]}`;
}
const Dinner = makeDinner("🥝", "🌽", "🍞", "🍺");
console.log(Dinner);

//Arrow Function -> velmi kompaktní
const beerFun = function (qty) {
    return "🍺".repeat(qty);
}
console.log(beerFun(2));


const makeWine = (qty) => "🍷".repeat(qty);
//pokud vynecháme {} tak funkce vrátí hodnotu i bez keywordu return
const makeWine2 = (qty) => { 
    return "🍷".repeat(qty)
};
// Funkce dělají naprosto stejnou věc -> přijímají argument qty a vrací daný počet vín
// Druhý zápis se liší akorát tím, že pokud přidáme {}, tak můžeme kód uvnitř těla funkce standartně rozšiřovat
console.log(makeWine(4));
console.log(makeWine2(4));
// arrow funkce budou vždy Function Expression -> nelze deklarovat funkci pomocí arrow zápisu
// Arrow funkce nemají vlastní .this object (více v objects.js)
// Pokud je to možné -> používat Arrow funkce


//Pure vs Impure functions
let x = 0; //global proměnná
const impure = () => {
    x++; 
    return x**2;
}
//IMPURE funkce tuto global proměnnou mutuje a poté ji změněnou vrací
// IMPURE funkce operují na proměnných mimo jejich local scope -> práce s kódem je poté složitější

const pure = (x) => x**2;
// PURE funkce závisí pouze na vstupních parametrech, zároveň také upravuje proměnné pouze ve své local scope
// PURE funkce také negeneruje žádné vedlejší efekty
// Takovýto kód je lepší na čtení a práce s ním je jednodušší



// Higher order functions -> HOF
    // First class functions = funkci můžeme předat jako argument jiné funkci, funkce může vracet jinou funkci
    // Běžné u asynchronního programování 

// Dobrý příklad HOF funkce, je funkce "setTimeout" (build-in funkce, která nám umožní spouštět kód po určité časové odezvě)
    // Funkce kterou chceme po delayi spustit = 1. argument, délka delaye v ms = 2. argument
let haveFun = () => console.log("fun!");
setTimeout(haveFun, 100);
setTimeout(() => console.log("fun!"), 500); //2 rozdílné zápisy se stejným výsledkem

// Pomocí HOF můžeme nahrazovat for-loopy
const arr = [1,2,3,4];
const squared = [];
for (const x of arr) { // standartní JS for-loop
    squared.push(x**2);
}
console.log(squared);
// Array.map -> HOF, která přijímá funkci jako první argument a tuto funkci zavolá na každý item v daném array
// stejné jako funkce map() v pythonu
const squared2 = arr.map(x => x**2);
    // "x" reprezentuje položku v daném array
    // "x**2" je return value z funkce
const rand = arr.map(x => `číslo je: ${x}`);
console.log(rand);
console.log(squared);

const squareIt = x => x**2; // Použití dané funkce s Function expresion s descriptive jménem - více reusable
const squareIt_ = arr.map(squareIt); 
console.log(squareIt_);

//HOF, Closure
    // lexical enviroment - mění se když vytváříme fci
const a = 1;
// lexical enviroment A
    const outer = () => {
        const b = 2;
        // lexical enviroment B
        const inner = () => {
            const c = 3;
            // lexical enviroment C
            return a+b+c;
        }
        return inner;
    }
// inner funkce má přístup k local proměnné outer funkce, ale outer funkce nemá přístup k proměnným inner funkce

function useCat() {
    let name = "baby kitten";
    
    // vracíme array, který obsahuje 2 funkce
        // 1. funkce je funkce, která k jakémukoli argumentu přidá slovo "Meow"
        // 2. funkce je setter, který mění proměnnou "name" podle daného argumentu
    // inner funkce v array mají přístup k proměnným (proměnná "name") definovaným uvnitř outer funkce ("useCat()") 
    return [
        () => `Meow ${name}`,
        (newName) => name = newName
    ]
}

const [ meow, setName ] = useCat(); // React hooks? 
// return funkce useCat() nyní budeme moct použít jako meow() a setName(newName)
console.log(meow());
setName("Peter");
console.log(meow());
