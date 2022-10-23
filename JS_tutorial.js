let num = 5; // Používat "let" místo "var"
let x;
x = 5;
let y = 7, z = 4, c = 6;
// Pokud použijeme proměnnou bez inicializace - její hodnota bude "undefined"
// proměnné vytvořené pomocí "let" jsou block-scoped - jsou přístupné pouze v určitém bloku

x = 3;
console.log(x); // psaní zprávy do debug console na webu i zde

const xx = 1; // Jakmile jednou inicializujeme konstantu - nemůžeme měnit její hodnotu
// konstantu musíme vždy inicializovat při založení

console.log("data : "+xx);
const text = "Hello";

// Data types 
/*
    - String
    - Number - integer, floating-point number
    - BigInt - Integer s libovolnou přesností
    - Boolean - true / false
    - undefined - neinicializovaná hodnota
    - null - null hodnota
    - Symbol - data type jehož instance jsou unikátní a neměnné
    - Object - kolekce key-value párů (jediný non-primitive type - může uchovávat kolekce dat, primitive type může uchovávat pouze single data)
*/
//String
const name1 = "Daniel";
const surname = "Janda";
const wholeName = `Moje jméno je ${name1} a přijímení ${surname}`; // pravý_alt+ý nebo levý_alt+96
console.log(wholeName);
//Number
const number1 = 3;
const number2 = 3.45413434;
const number3 = 3e5; // 3*10^5

const infi = 3/0;
console.log(infi); //infinity
const neg_infi = -3/0;
console.log(neg_infi); //-infinity
const Nan_value = "abc"/1;
console.log(Nan_value); //NaN - not a number

//BigInt - čísla větší než +-(2^53-1)
// na konec čísla píšeme "n"
// nemůžeme sčítat BigInt a number type!!!
// BigInt není podporován ve většině prohlížečů
const bigvalue = 9000000000000000000000000000000042n;
const bigvalue2 = bigvalue + 1n;
console.log(bigvalue2);

//Boolean
const dataChecked = true;
const valueCounted = false;

//Undefined
// nepřiřazená hodnota, pouze deklarovaná proměnná
let novalue;
let novalue2 = undefined; // nepoužívá se, lepší je inicializovat hodnotu null hodnotou (neznámá nebo prázdná hodnota)
console.log(novalue);
console.log(novalue2);

//null
// neznámá nebo prázdná hodnota
const null_number = null;
console.log(null_number);

//Symbol
// Immutable primitive unikátní hodnota
const symbol1 = Symbol("hello_");
const symbol2 = Symbol("hello_");
console.log(symbol1===symbol2); //proměnné sice obsahují stejné hodnoty, ale jelikož Symbol typ je vždy unikátní - tyto proměnné se nerovnají

//Object
// Complex data type - pro ukládání kolekcí dat
const student = {
    firstName: "ram",
    lastName: null,
    class: 10
};
console.log(student);

//JS je dynamically typed (loosely typed) jazyk - automaticky určí data type proměnných 
// proměnné také můžou v průběhu programu měnit svůj datový typ
let data;
data = 5;
data = "ahoj";

//typeof - pro zjištění datového typu proměnné
const number = 4;
console.log(typeof(number));
const text_ = "hello world";
console.log(typeof(text_));
console.log(typeof(student));
console.log(typeof("ahoj"));
console.log(typeof(null)); // vrátí "object" - JS problém od prvního releasu