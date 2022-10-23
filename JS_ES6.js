// ECMAScript 2015 or ECMAScript6

// JavaScript Arrow Function
let x = function(x,y) {
    return x * y;
};
// lepší:
let y = (x,y) => x * y; 

// Syntaxe
/*
let myFunction = (arg1, arg2, ... argN) => {
    statement(s);
}

Pokud má tělo funkce pouze jeden příkaz jebo expresi, můžeme napsat takto:
let myFunction = (arg1, arg2, ... argN) => expression;
*/

// Arrow funkce bez argumentů 
let greet = () => console.log("Hello");
greet();

// Arrow funkce s jedním argumentem
let pozdrav = x => console.log(x);
pozdrav("Ahoj");

// Arrow funkce jako expression
let age = 5;
let welcome = (age < 18) ? () => console.log("Baby") : () => console.log("Adult");// zkrácený if -> (podmínka) ? true : false;

welcome();

//víceřádková arrow funkce
let sum = (a,b) => {
    let result1 = a + b;
    return result1;
}

let result = sum(4,8);
console.log(result);

//this s Arrow funkcí
// u standartní funkce this referuje na funkci uvnitř které se nachází
// this není asociováno s arrow funkcí 
    // tudíž pokud uvnitř arrow funkce zavoláme this -> referuje na parent scope

function Person() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {
        // this is accessible
        console.log(this.age); // this referuje na objekt jelikož sayName je metoda objektu

        function innerFunc() { // normální funkce
            // this refers to the global object
            console.log(this.age); // this referuje na globální objekt (window object)
            console.log(this);
        }

        let innerFunc2 = () => console.log(this.age); // this odkazuje na parent scope - objekt který má vlastnost age
        // arrow funkce zkrátka nemají vlastní this

        innerFunc();
        innerFunc2();
    }
}

let z = new Person();
z.sayName();

// Arguments Binding
// Normální funkce mají argument binding - když předáme argumenty normální funkci, můžeme k ním přistupovat pomocí arguments keywordu
let xx = function () {
    console.log(arguments);
}
xx(4,5,6);
// Arrow funkce nemají arguments binding - Error (nemají arguments keyword)¨
// místo toho můžeme použít spread syntaxy
let xxx = (...n) => console.log(n);
xxx(4,5,6);

// Arrow funkce jsou lepší pro psaní Promises and Callbacks

// Arrow funkce by jsme neměli používat jako metody uvnitř objektu - jejich this bude odkazovat na global scope místo na objekt
// Arrow funkce nemůžeme použít jako constructor
