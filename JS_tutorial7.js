// Hoisting
// Chování, při kterém lze funkci nebo proměnnou použít před deklarací
console.log(test); //undefined
var test;
// Deklarace funkcí a proměnných je přidána do paměti během compile fáze (proto se program chová jako by proměnná "test" byla deklarována již před použitím)

q = 5;
console.log(q);
var q;
// Chová se stejně jako:
/*

var q;
q = 5;
console.log(q);

*/

// var - umožňuje hoisting 
// let / const - neumožňují hoisting

// Hoisting funguje pouze u deklarací - nikoliv u inicializací
console.log(a); // undefined - compiler ví, že proměnná "a" je deklarovaná, ale neví, že je i inicializována
var a = 5;
// Chová se stejně jako:
/*

var a;
console.log(a);
a = 5;

*/

// Proměnná je hoistována pouze na začátek funkce
function greet() {
    b = "hello";
    console.log(b); 
    var b;
}

greet();
// console.log(b); -- Error, jelikož proměnná "b" je definována v local scope - hoisting z ní nedělá global scope proměnnou

/*

r = 5;
console.log(r);
let r;

*/
// Error, jelikož pokud používáme "let" - proměnná musí být nejprve deklarovaná a poté inicializovaná


//Function Hoisting
// - funkce může být zavolána před svou deklarací

greet_hoist();

function greet_hoist() {
    console.log("Hi, there.");
}
// Pokud je ovšem funkce použita jako expression -- program vyhodí Error, jelikož pouze deklarace jsou hoisted

// Hoisting není ve většině prog. jazyků podporován (Python, C, C++, Java) 
// Hoisting může způsobit nepředvídatelné chování našeho programu
// Je proto žádoucí definovat proměnné + funkce před jejich použitím, aby jsme se hoistingu vyhnuli
// Je lepší používat "let"+"const" namísto "var", aby jsme se vyhnuli hoistingu

