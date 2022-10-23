//CONSTRUCTOR
// Constructor funkce slouží k tvorbě objektů

//constructor function
function Person () {
    this.name = "John",
    this.age = 23,
    this.greet = function () {
        console.log("Hello");
    }
    // Nově vytvořený objekt bude mít tyto vlastnosti a metody
    // V constructor funkci "this" keyword ukazuje na objekt při vytvoření objektu
}

//vytvoření objektu
const person = new Person(); // Vytvoření objektu z constructor funkce
console.log(person.name);
// Z jedné constructor funkce můžeme vytvořit více objektů
const person2 = new Person();
person2.greet();

// CONSTRUCTOR FUNCTION WITH PARAMETERS
function BetterPerson(person_name, person_age, person_gender) {
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,
    this.greet = function() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
const better_person1 = new BetterPerson("Tom", 22, "Male"); //Předání argumentů constructoru během vytváření objektu
const better_person2 = new BetterPerson('Sam', 25, 'Female');
better_person1.greet();
better_person2.iq = 35; // Objektu můžeme přidávat vlastnosti jak jsme zvyklí
better_person2.ahoy = function () {console.log(`Hey, I am ${this.gender}`);};// Přidání metody objektu "better_person2"
console.log(better_person2);
console.log(better_person1);
better_person2.ahoy();

// Pokud tvoříme jeden objekt - object literal
// Více objektů - constructor funkce


// Pokud vytvoříme objekt pomocí object literals - každý objekt derivovaný z daného objektu se bude chovat jako klon původního objektu
// Každá změna na jednom objektu se propíše do ostatních objektů
let boy = {name: "Thomas"};
console.log(boy.name);
let girl = boy; // Objekt "girl" je derivovaný z objektu "boy"
girl.name = "Rose";
console.log(boy.name); // Změní se vlastnost "name" i na původním objektu -> Rose

// BUILT-IN CONSTRUCTORS

let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

const name_ = new String ("John");
console.log(name_);
const number_ = new Number(57);
console.log(number_);
const count = new Boolean(true);
console.log(count);

// Dobré vědět ale nepoužívat!!!

//OBJECT PROTOTYPE
// - Do constructor funkce můžeme také přidat vlastnosti a metody pomocí PROTOTYPE
function PrototypePerson () {
    this.name = "Nancy",
    this.age = 31
}
let Nancy = new PrototypePerson();
let Nancy2 = new PrototypePerson();

// Přidání nové vlastnosti do constructor funkce
PrototypePerson.prototype.gender = "Female";
console.log(Nancy.gender);
console.log(Nancy2.gender);


function Rotoped () {
    this.name = "Celaskon",
    this.price = 1200
}
let Roto = new Rotoped();
let Roto2 = new Rotoped();

// Každá constructor funkce má prototype object (datový typ object), ze kterého dědí (vlastnosti + metody) všechny objekty vzniklé z dané constructor funkce 
console.log(Rotoped.prototype); // {} - zatím nemá žádnou hodnotu (prázdný objekt)

// Přidání vlastnosti (key=display: value="Digital") do prototype objektu constructor funkce Rotoped()
// objectConstructorName.prototype.key = 'value';
// Prototype se používá pro přidání vlastnosti všem objektům vzniklým z constructor funkce
Rotoped.prototype.display = "Digital";
console.log(Rotoped.prototype); // { display: 'Digital' } -- obsahuje přidanou vlastnost
// Objekty Roto + Roto2 zdědili vlastnost "display" z prototype objektu dané constructor funkce 
console.log(Roto.display);
console.log(Roto2.display);

//Přidání metody objektům za pomocí prototype objektu
Rotoped.prototype.sound = function() {
    console.log("Roto Roto Roto " + this.name);
}
console.log(Rotoped.prototype); // { display: 'Digital', sound: [Function (anonymous)] }
// Vytvořené objekty přidanou metodu opět podědí z prototype objektu
Roto.sound();
Roto2.sound();

// Změna Prototype
// Pokud jsou vlastnosti prototype objektu změněny - všechny nově vzniklé objekty budou mít novou hodnotu dané vlastnosti
// Všechny dříve vzniklé objekty budou mít dřívější hodnotu dané vlastnosti

console.log(Roto.display); // Digital - dřívější hodnota

Rotoped.prototype = {display: "Analog"} // Změna "display" vlastnosti u prototype objektu Rotoped() constructoru
console.log(Rotoped.prototype); // { display: 'Analog' }
// Změnili jsme celý prototype objekt - metoda "sound" již nyní není dostupná pro nově vzniklé objekty z Rotoped constructor funkce

let Roto3 = new Rotoped(); // Vytvoření nového objektu z constructor funkce
console.log(Roto3.display); // Nově vzniklý objekt má novou hodnotu vlastnosti
console.log(Roto.display); // Dříve vzniklý objekt si stále drží starou hodnotu vlastnosti

// JavaScript Prototype Chaining
// Pokud se objekt pokusí o přístup ke stejné vlastnosti, která je v constructor funkci a zároveň v prototype objektu -> vezme si tu vlastnost, která se nachází v constructor funkci
function Person_again() {
    this.name = "John"
}
Person_again.prototype.name = "Peter";
Person_again.prototype.age = "32";

const person69 = new Person_again();
console.log(person69.name); // Vlastnost "name" je definována v constructor funkci - bereme ji proto odsud
console.log(person69.age); // Vlastnost "age" není definována v constructor funkci - koukneme do prototype objektu constructor funkce, kde definována je
console.log(person69.__proto__); // Přístup k prototype objektu constructor funkce z daného objektu
// __proto__ by se již nemělo využívat!!
