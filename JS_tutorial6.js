//FUNCTION - function
// declaring a function named greet()
function greet() {
    console.log("Hello there");
}
// function call
greet();
function greetparam(name) {
    console.log(`Hello ${name}`);
}
greetparam("Daniel");
// Hodnota předaná při deklarování funkce se nazývá parametr
// Když je funkce zavolána předaná hodnota se nazývá argument

function add(a,b) { // funkce se dvěmi parametry
    console.log(a+b);
}
add(3,4); // zavolání funkce a předání dvou argumentů
add(5,7);

//return - označuje, že funkce končí - kód po return statementu nebude vykonán
// pokud funkce nic nevrací (nemá return statement) - vrací undefined hodnotu
function add_(a,b){
    return a+b;
}
let result = add_(4,6);
console.log(result);

// V Javascriptu můžou být funkce definované jako expressions
let x = function (num) {return num*num}; // do proměnné x ukládáme funkci - funkci je následně možno volat pomocí proměnné ve které je uložena
// ukládané funkci říkáme, že je anonymní (nemá vlastní název) 
console.log(typeof(x)); //function type
console.log(x(4));
let y = x(3); // může být také použita jako hodnota pro další proměnné
console.log(y);

//Variable Scope
// - přístupnost proměnných a funkcí v určitých blocích kódu
// Scope dělíme na Global scope a Local scope

// Global Scope
// Např. proměnná definovaná na začátku programu, která není uvnitř žádné class nebo funkce 
let a = "hello"; // global proměnná - global scope - může být použita všude v programu
function hello_func(){
    console.log(a);
    a = "hi!"; // hodnota globální proměnné může být změněna uvnitř funkce
}
hello_func();
console.log(a);
ccc = "ahojky!"; // Proměnnou můžeme použít bez jejího deklarování - bez deklarování -> automaticky globální proměnná
console.log(ccc);
// Ve "strict mode" JavaScriptu - proměnné nemůžou být použity bez deklarování 

//Local Scope
// - proměnné jsou přístupné pouze uvnitř funkce

let r = "Hello" //Global proměnná 
function local_scope(){
    let b = "World!" //Local proměnná - existuje pouze uvnitř funkce "local_scope"
    console.log(r+b); 
}
local_scope();
// console.log(a+b); - Error jelikož proměnná "b" neexistuje v global scope
// Keyword "let" je block-scoped - k definované proměnné ("let") můžeme přistupovat pouze v daném bloku

let aa = "Hello"; //Global proměnná
function local_scope2(){
    let bb = "World"; // Local proměnná - přístupná pouze uvnitř funkce "local_scope2"
    console.log(aa + " " + bb);
    if (bb==="World"){
        let cc = "Hello"; // Block-scoped proměnná - přístupná pouze v "IF" statement bloku 
        console.log(aa + " " + bb + " " + cc);
    }
    // console.log(aa + " " + bb + " " + cc); -- proměnná "cc" v tomto bloku neexistuje
}
local_scope2();

// let = block-scoped
// var = function-scoped
    // pokud bychom uvnitř "IF" statement bloku vytvořili proměnnou (var cc = "Ahoj") - bude se jednat o Local scope proměnnou a bude přístupná v celé funkci

// let vs. var
// LET
    // - block-scoped
    // - není možno re-deklarovat proměnné
    // - Nevyskytuje se "Hoisting"

// VAR
    // - function scoped
    // - umožňuje re-deklarovat proměnné
    // - Vyskytuje se "Hoisting"

let new_var = "jelly";
function random_func(){
    let new_var = "fish"; // můžeme re-deklarovat "new_var" pomocí "let" - jelikož se jedná o local-scope - vytvoříme tak jinou proměnnou (nezměníme hodnotu "new_var" v global-scope)
    if (new_var = "fish"){
        let new_var = "cucumber"; // opět můžeme re-deklarovat "new_var" jelikož se jedná o jiný blok ("if")
        // nezměníme "new_var" hodnotu v local scope ani v global scope
        console.log(new_var);
    }
    console.log(new_var);
}
random_func();
console.log(new_var); // hodnota proměnné "new_var" se v global-scope nezměnila

// re-deklarování proměnné pomocí "let" uvnitř rozdílných scope nebo bloků se chová jako deklarování rozdílných proměnných - hodnota uvnitř proměnné ve vnějších blocích se nemění