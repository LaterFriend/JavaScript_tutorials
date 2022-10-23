// Default Parameters
// přiřazování defaultních hodnot parametrům
let sum = (x=3,y=1) => console.log(x+y);
sum(); // pokud nevyplníme parametry při volání funce, použijí se parametry defaultní
sum(4,88);
sum(2); // pokud vyplníme jen jeden z parametrů, u dalšího se použije jeho defaultní hodnota (y=1)
sum(undefined,undefined); // pokud předáme undefined jako parametr - použije se defaultní hodnota parametru


function sum_normal(x=1, y=7) {
    return x+y;
}
console.log(sum_normal());
console.log(sum_normal(4,8));

// expression jako defaultní parametr

function expAsParam(x=2, y=x, z=x+y){
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}
expAsParam();
expAsParam(4);
expAsParam(4,2);
expAsParam(4,1,6);

// funkce jako defaultní parametr
const soucet = () => 14;

const calculate = function( x, y = x * soucet() ) {
    return x + y;
}
const result = calculate(12);
console.log(result);

// Template Literals for Strings
const _name = "Daniel";
const _age = "23";
console.log(`Moje jméno je ${_name} a je mi ${_age}`);

//"" '' bez escape znaku
console.log(`Uvnitř můžu použít " " i ' '`);

//víceřádkový string
console.log(`aaaaaaaaaaaaaaaaaa
asssssddddddddddddd
asdddddddddddddddddddddddddddd`)

const _result = 21;
console.log(`${_result < 22 ? 'Too low' : 'Very high'}`);
// pomocí literal templatu můžeme snadno v řetězci zobrazit hodnotu proměnné, nebo dokonce výsledek expression
    // tomuto říkáme interpolation

//Tagged templates
function tagTemplate(strings) {
    return strings;
}

//standardní cesta:
const result_ = tagTemplate("Hello Jack");
console.log(result_);

//tagged templates:
const tagresult_ = tagTemplate`Hello Jack`;
console.log(tagresult_);

// složitější příklad:
const jmeno = "Daniel";
const pozdrav = true;
const vek_ = 23;
function tagExample(strings, nameValue, age){
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?
    let str2 = strings[2]; // is your age?
    if (pozdrav) 
        console.log(strings);
        return `${str0}${nameValue}${str1}${age}${str2}`;
}
const vysledek = tagExample`Hello ${jmeno}, How are you? ${vek_} is your age?`; 
// Jako první argument se předá funkci array stringů - elementy v array jsou části stringu mezi interpolations v templatu (např. část mezi ${jmeno} a ${vek})
// Jako další argumenty se předají hodnoty a expresse v interpolations - postupně od začátku, jeden interpolation - jeden argument
console.log(vysledek);

