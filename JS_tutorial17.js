//JS SYMBOL
// Představen na ES6 - immutable - primitive - unique
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1===value2);

//Funkce Symbol() - vytvoření symbolu
const x = Symbol("hey");
console.log(x);
console.log(x.description); //řetězec kterým jsme popsali symbol ("hey")

//Symbol jako Object key
let id = Symbol("id");

let person = {
    name : "Jack",
    // Symbol jako key, nikoliv "id" jako key
    [id]: 123
};
console.log(person);
// Symboly nejsou zahrnuty v for...in loopu 
let person2 = {
    name : "Daniel",
    job : "programer",
    age : 23,
    [id]: 69
};

for (let i in person2) {
    console.log(person2[i]);
}
//Benefity při používání Symbolů v Objectu jako key hodnot
/*
    - Nehrozí problémy s duplikací - Symbol je unikátní - nemusíme se bát, že omylem přepíšeme tuto hodnotu, jelikož i když dáme symbolu stejný znak - stále bude unikátní
    - Hodnota nemůže být přepsána jiným programem nebo nedorozuměním
*/
let human = {
    name : "Jack"
};
//vytvoření symbol proměnné
let real_id = Symbol("id");
console.log(typeof(real_id));

//přidání symbolu jako key hodnoty do objektu
human[real_id] = 1;
console.log(human);

let human2 = {
    name : "Thomas"
};
human2[real_id] = 1;
console.log(human2);

// Symbol Methods
/*
for()	    Searches for existing symbols
keyFor()	Returns a shared symbol key from the global symbol registry.
toSource()	Returns a string containing the source of the Symbol object
toString()	Returns a string containing the description of the Symbol
valueOf()	Returns the primitive value of the Symbol object.
*/

//Symbol Vlastnosti
/*
asyncIterator	Returns the default AsyncIterator for an object
hasInstance	    Determines if a constructor object recognizes an object as its instance
isConcatSpreadable	Indicates if an object should be flattened to its array elements
iterator	    Returns the default iterator for an object
match	        Matches against a string
matchAll	    Returns an iterator that yields matches of the regular expression against a string
replace	        Replaces matched substrings of a string
search	        Returns the index within a string that matches the regular expression
split	        Splits a string at the indices that match a regular expression
species	        Creates derived objects
toPrimitive	    Converts an object to a primitive value
toStringTag	    Gives the default description of an object
description	    Returns a string containing the description of the symbol
*/