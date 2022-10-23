let a = false;
console.assert(a,'Toto nepujde!');
// Pokud je první parametr false -> druhý parametr se zobrazí jako error
// Assertion failed: Toto nepujde!

let b = 12;
let c = 44;

// špatně:
console.log(b,c);
// lépe:
console.log({b,c}); // <- dává větší přehled
// nejlépe:
console.table({b,c}); // <- zobrazí tabulku kde ve sloupci prvním jsou názvy proměnných a ve druhém jejich hodnoty
// nebo:
console.table([b,c]); // <- zobrazí tabulku kde ve sloupci prvním jsou indexy daných proměnných a ve druhém jejich hodnoty



// Slouží pro zobrazení nested skupin a pro lepší orientaci v kódu
console.log("This is the outer level");
console.group();
console.log("Level 2");
console.group();
console.log("Level 3");
console.warn("More of level 3"); // viditelné pouze ve web serveru
console.groupEnd();
console.log("Back to level 2");
console.groupEnd();
console.log("Back to the outer level");

// funguje pouze ve web console - shromažďuje zprávy až do groupEnd v jedné skupině
console.groupCollapsed('work');
console.log('A');
console.log('A');
console.log('A');
console.log('A');
console.log('A');
console.log('A');
console.log('A');
console.log('A');
console.log('A');
console.groupEnd();


let obj = {
    name : 'Honza',
    age : 22,
    country : 'Czech',
    hobbies : {
        playing_videogames : true,
        fishing : false,
        football : true
    }
}
console.dir(obj); // Pro lepší zobrazování objektů -> hlavní rozdíl je vidět na web serveru


// console.count(label) -> po každém zavolání s daným labelem se zvedne jeho hodnota o 1
console.count('label_1');
console.count('label_1'); 

console.count('label_2'); 

console.count('label_1');
console.count('label_1');
console.count('label_1');
console.count('label_1');

console.count('label_2');
console.count('label_2');
console.count('label_2');
console.count('label_2');

console.time(); // console.time(label) <- odstartuje timer
for (let i = 0; i <= 1000; i++){
    console.log();
}
console.timeLog(); // <- kolik času uplynulo od odstartování timeru
console.time('timer2'); //timer s jiným labelem -> bere se jako jiný timer
console.timeLog(); 
console.timeLog('timer2'); 