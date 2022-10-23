const items = [
    { name : 'Bike',     price : 100},
    { name : 'TV',       price : 200},
    { name : 'Album',    price : 10},
    { name : 'Book',     price : 5},
    { name : 'Phone',    price : 500},
    { name : 'Computer', price : 1000},
    { name : 'Keyboard', price : 25},
];

// Filter
const filteredItems = items.filter((item) => { // předáme metodě callback funkci, která přijímá jeden parametr (položku z arraye)
    return item.price <= 100;
    // na každém elementu arraye se spustí callback funkce -> element se předá callback funkci jako argument
    // metoda filter pak vrací jen ty položky původního arraye kde callback funkce vyjde true
    // neměníme původní array
});
console.log(filteredItems); // array s elementy, které prošli filtrem


// Map
const mapNames = items.map((item) => {
    return item.name;
    // na každé položce původního arraye zavoláme callback funkci -> výsledek callback funkce uložíme do nového arraye 
    // elementy v novém array jsou ve stejném pořadí jako elementy v původním array
});
console.log(mapNames);

// Find
const findItem = items.find((item) => {
    return item.name === 'Book';
    // vrátí první element z arraye, u kterého callback funkce vrátí true
});
console.log(findItem);

//forEach -> nevrací žádnou hodnotu
items.forEach((item) => {
    console.log(item.name);
});
// pro každý element v poli zavolá callback funkci -> element předává jako argument

//some -> vrací true/false
const SomeItems = items.some((item) => {
    return item.name === 'Book';
    // pokud předaná callback funkce u alespoň jednoho elementu vrátí true -> some metoda vrátí true
});
console.log(SomeItems);

//every -> vrací true/false
const EveryItem = items.every((item) => {
    return item.price > 50;
    // pokud předaná callback funkce vrátí true u každého elementu -> every metoda vrátí true 
});
console.log(EveryItem);

//reduce
const total = items.reduce((currentTotal,item) => {
    return item.price + currentTotal;
/* 
array1.reduce((previousValue, currentValue) => {previousValue + currentValue},initialValue);
- reduce v každé iteraci bere element z arraye (currentValue) a přidává ho k výsledku z minulé iterace (previousValue) 
- initialValue je hodnota previousValue v první iteraci
*/
}, 0);
console.log(total);

//includes
const i = [1,2,3,4,5];
const includesTwo = i.includes(2); // pokud array obsahuje prvek -> true, jinak false
const includesSeven = i.includes(7);
console.log(includesTwo,includesSeven);
