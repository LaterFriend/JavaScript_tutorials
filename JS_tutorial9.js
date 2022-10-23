// JavaScript Objects
// - Non-primitive data type 
// - Nepotřebujeme třídu (class) pro tvorbu JS objektů (rozdíl oproti ostatním prog. jazykům)
// KEYWORD CLASS představen v ES6 - podobné funkcím

// object
const student = {
    firstname: "ram",
    class: 10
};
// každá položka objektu je: klíč : hodnota 
// položky oddělujeme čárky

const person = {name: "John", age: 20};
// keys: name, age
// values: "John", 20
//key:value páry nazýváme properties (vlastnosti)

// name: "John" a age: 20 -> vlastnosti
console.log(person.age); // 20
console.log(person["name"]); // John

// Objekt může obsahovat další objekt (proto non-primitive)
const stud = {
    name: "John", 
    age: 20,
    marks : {
        science: 70,
        math: 75
    }
};
console.log(stud.marks);
console.log(stud.marks.math);

// Objekt může také obsahovat funce

const pers = {
    name: "Sam",
    age: 30,
    // Funkce jako value - metoda
    greet: function() {console.log("Hello")}
};
pers.greet(); // Metoda - vlastnost objektu obsahující deklaraci funkce jako hodnotu

// V JS je spousta built-in metod - např. parseInt() : metoda Number objektu
let boy = { }; //Deklarace JS objektu
boy.name = "Tom"; // přidání vlastnosti
boy.ahoy = function() {console.log("hey, man!");} //přidání metody 
boy.ahoy();


// THIS keyword
// Pro přístup k vlastnostem objektu z metody daného objektu
boy.greet = function() {console.log(`Hi, my name is ${this.name}`);} // Přistupujeme k vlastnosti "name" (key) daného objektu
boy.greet();
// V JS, "this" keyword při použití s metodou objektu odkazuje na objekt
// "this" je vázáno na objekt

// funkce uvnitř objektu může přistupovat ke svým proměnným stejně jako normální funkce
boy.greet_diff = function() {
    let surname = "Doe"; // local proměnná
    console.log("The name is" + " " + this.name + " " + surname);
}
boy.greet_diff();