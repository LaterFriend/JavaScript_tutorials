//ARRAYS
const words = ["Hello","World"];
const words2 = {first:"Hello",second:"Hi"};
console.log(typeof(words)); //object
console.log(typeof(words2)); //object

const myList = [];
const myList1 = [2,5,4,5,1];
const NewData = [123,"ASDA",true,"ASDA",["ADA",23,"SDASD"]];
const NewData1 = [
    {"task1":"exercise"},
    [1,2,3,4],
    function hello() {console.log("Hello")}
]; //Do arraye můžeme ukládat jiné objekty, ale i funkce

console.log(NewData1[1]); //přístup k array položkám

//ADDING AN ELEMENT TO ARRAY
//push() - přidá element na konec arraye
let daily = ["a","b"];
daily.push("c");
console.log(daily);
//unshift() - přidá element na začátek arraye
daily.unshift("0");
console.log(daily);

//CHANGE THE ELEMENTS OF ARRAY
daily[2] = "D";
console.log(daily);
daily[5] = "after";
console.log(daily); //Pokud přidáme element o několik polí za poslední index - indexy mezi nimi budou mít "undefined" hodnotu

//REMOVE AN ELEMENT FROM AN ARRAY
//pop() - odstraní poslední element z pole - vrátí odstraněnou hodnotu
daily.pop(); //odstranění
console.log(daily);
const last = daily.pop(); //vrácení
console.log(last); //prázdný item ("undefined" hodnota) je taky item
console.log(daily);
//shift() - odstraní první element z pole - vrátí odstraněnou hodnotu
daily.shift();
console.log(daily);
const first = daily.shift();
console.log(first);
console.log(daily);

//ARRAY LENGTH
//length vlastnost
console.log(daily.length);

//Jiné metody pro práci s ARRAY
/*
concat()	joins two or more arrays and returns a result
indexOf()	searches an element of an array and returns its position
find()	    returns the first value of an array element that passes a test
findIndex()	returns the first index of an array element that passes a test
forEach()	calls a function for each element
includes()	checks if an array contains a specified element
push()	    aads a new element to the end of an array and returns the new length of an array
unshift()	adds a new element to the beginning of an array and returns the new length of an array
pop()	    removes the last element of an array and returns the removed element
shift()	    removes the first element of an array and returns the removed element
sort()	    sorts the elements alphabetically in strings and in ascending order
slice()	    selects the part of an array and returns the new array
splice()	removes or replaces existing elements and/or adds new elements
*/
// Pokud element není v array "indexOf()" vrací -1

//Jelikož je array objekt - můžeme ukládat pseudo "key:value" páry na tzv. pojmenované indexy - velice se nedoporučuje
// pokud chceme použít key:value páry - je lepší pracovat s key-value objektem {}
let arr = ["A","B","C"];
arr.name = "John Ben";

console.log(arr);
console.log(arr.length); //stejný přístup ke key hodnotám jako u standartního objektu
console.log(arr["name"]); 
console.log(arr.name);

