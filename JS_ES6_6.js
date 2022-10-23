//CLASSES
// Podobné jako JS constructor funkce

// Constructor funkce: 
function Person() {
    this.name = "John",
    this.age = 23
    this.greet = function() {
        console.log(`Hello ${this.name}`);
    }
}
const pers1 = new Person();
console.log(pers1.name);
pers1.greet();

// Class
class Person2 {
    constructor(name) { // constructor() metoda je zavolána automaticky vždy když vytváříme objekt
        this.name = name,
        this.age = 22;
    }
    //defining method
    greet() {
        console.log(`Hello ${this.name}`);
    }
    //Getter
    get personName() {
        return this.name;
    }
    //Setter
    set personName(x) {
        this.name = x;
    }
}

const pers2 = new Person2("Jack");
console.log(pers2.name);
pers2.greet();
console.log(pers2.personName);
pers2.personName = "Thomas";
console.log(pers2.personName);

//Class nemá Hoisting - musí být nejprve deklarována a potom až používána
// Classes automaticky využívají 'use-strict' - kód uvnitř class je automaticky ve strict módu
// Class je speciální typ funkce, typeof operátor proto vrací "function"

// JS Class Inheritance -extends keyword

class Student extends Person2 {
    constructor(name) {

        console.log("Creating student class");
        super(name), // constructor superclass (parent class) a předáváme jí jako parametr name
        this.age = 69; //Overriding vlastnosti z parent class
    }
    greet() {
        console.log("Bye Motherfucker!"); //Overriding metody z parent class
    }
}
let student1 = new Student("John");
student1.greet();
console.log(student1.age);

//Super()
// Super keyword uvnitř child class odkazuje na parent class

//Overriding metody nebo vlastnosti
// Pokud má child class stejnou metodu nebo vlastnost jako parent class - bude použita vlastnost/metoda child class
