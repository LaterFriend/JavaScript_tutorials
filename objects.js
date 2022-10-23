// object je kolekce vlastností, kde každá vlastnost je pár name(key) hodnoty a value hodnoty
// velmi podobné python dict data typu
const obj = {}; // <- object literal 
const obj_a = {
    rabbit: '🕳️', //<-- property [property name: property value] -> key value pár
    // property name musí být hodnota, u které je možné převést jí do stringu
    // property value může být cokoliv chceme -> string, numeric, object, function, ... 
    year: 1923,
    // i když je object const variable -> i tak můžeme upravovat jeho properties po vytvoření
};

obj['rabbit'] = '🐇'; // úprava property
console.log(obj['rabbit']); // zobrazení property

//object constructor syntax
const obj_const = new Object();
obj_const.rabbit = '🐰'; // nastavení object properties pomocí dot notation (object constructor)
// Dot notation vypadá lépe, ale je třeba aby property names nebyli stringy začínající číslem a aby byli bez mezer. Např. 1rabbit nebo some rabbit

console.log(obj_const.rabbit);

// vytvoření Objectu pomocí statické metody na Object třídě 
    // toto se moc nepoužívá k vytvoření prázdného Objectu, ale spíše k použití existující Objectu jako prototypu
const organism = { // standartní Object, obsahující náhodné číslo v "dna" property
    dna: Math.random()
};

const obj_stat = Object.create(organism); // vytváříme pomocí statické metody nový Object "obj_stat", kdy předáváme "organism" Object jako prototyp
console.log(obj_stat.dna); //Tuto property můžeme zavolat, jelikož existuje v prototypu daného Objectu (organism)
console.log(Object.getPrototypeOf(obj_stat)===organism); // zjišťujeme zda je "organism" prototypem k Objectu "obj_stat"
// getPrototypeOf vrací prototyp (tj. hodnota vnitřní vlastnosti [[Prototype]] daného Object) -> vrací Object, který jsme použili jako prototyp k vytvoření daného Objectu



//Object defineProperty
const obj_b = Object.create({});
Object.defineProperty(obj_b, "unicorn", { // 1. argument: název Objectu, 2. argument: property name, 3. argument: Object -> descriptor (kde upravujeme různé možnosti pro danou property)
    value: '🦄',
});
console.log(obj_b.unicorn);


//structuring 
const spider = "🕷️";
const legs = 8;
const random = () => Math.random().toString(36).slice(-5);
const obj_spider = {
    spider, // Objectu se vytvoří nové properties, které se budou jmenovat stejně jako název proměnné a budou mít i stejné values jako dané proměnné (shorthand syntax)
    legs,

    legs: 10, // pokud přidáme property s daným jménem znova s jinou value -> přepíšeme její value (right side wins)
    legs: 29,
    web: '',
    [random()]: true, // computed property names => (např. z funkce) musíme umístit do hranatých závorek [computed()]: value
    makeWeb: function () { // Object properties mohou mít jako svojí value funkci => Method (metoda)
    // Metodu můžeme definovat pomocí shorthand syntaxe: makeWeb() { }
    // get, set keywords pro definování getteru a setteru 
        this.web+="🕸️🕸️🕸️";
        // pokud definujeme metodu uvnitř funkce -> this odkazuje na tento daný Object
        // pokud by jsme definovali danou metodu pomocí arrow function syntaxe -> this by odkazovalo na global scope
        return this; // this keyword zde odkazuje na daný Object -> každá metoda kterou zavolám bude nyní vracet odkaz na daný Object
    }
};
console.log(obj_spider.makeWeb().makeWeb().makeWeb()); //Řetězení metod -> daná metoda musí vracet this (odkaz na Object na kterém zavoláme další metodu v řetězci)
console.log(obj_spider.spider);
console.log(obj_spider.legs);
console.log(obj_spider) 
//destructuring
//const { spider, legs } = obj_spider;  -> vytvoříme proměnné "spider" a "legs" obsahující values definované v Objectu (zde nefunguje protože proměnné "spider" a "legs" definujeme výše)
const { spider: mySpider, legs: myLegs } = obj_spider; // pokud chceme vytvořené proměnné nazvat jinak, aby např. nedošlo ke kolizi apod.
console.log(mySpider, myLegs); // Hodnoty properties (spider a legs) navážeme na proměnné (mySpider a myLegs)

// Object references
