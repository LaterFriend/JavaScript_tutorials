
//JavaScript Modules
// Pro separování kódu do jednotlivých souborů
// Module může obsahovat proměnné, funkce, třídy apod.

//import greetPerson funkce z jiného souboru
const display = require("./JS_tutorial19_2") // importovaný soubor
// display je nyní objekt : { greetPerson: [Function (anonymous)], a: '22' }

// použití greetPerson() definované v JS_tutorial19_2.js
console.log(display.greetPerson("Jack"));
console.log(display.a);
console.log(display.banger(4,4));
console.log(display); 